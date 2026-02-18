import zipfile
import xml.etree.ElementTree as ET
import re
import os
import json
import shutil

pptx_file = 'rcap 2021-2025 projets.pptx'
output_dir = 'angular-app/src/assets/images/projets_extracted'
output_json = 'pptx_data.json'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def extract_data():
    if not os.path.exists(pptx_file):
        print(f"File not found: {pptx_file}")
        return

    data = []
    
    try:
        with zipfile.ZipFile(pptx_file, 'r') as z:
            # 1. Extract relationships generally to map rIds to targets
            # We need to map media specific rIds per slide.
            
            # Find all slide XML files
            slides = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            
            def get_slide_number(name):
                match = re.search(r'slide(\d+)\.xml', name)
                return int(match.group(1)) if match else 0
            
            slides.sort(key=get_slide_number)
            
            print(f"Found {len(slides)} slides.")

            for i, slide_file in enumerate(slides):
                slide_num = get_slide_number(slide_file)
                slide_text = []
                slide_images = []
                
                # Parse Slide XML for Text
                with z.open(slide_file) as f:
                    tree = ET.parse(f)
                    root = tree.getroot()
                    # Namespace for DrawingML main
                    # ns = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main', 'p': 'http://schemas.openxmlformats.org/presentationml/2006/main'}
                    
                    for elem in root.iter():
                        # Extract text
                        if elem.tag.endswith('}t'):
                            if elem.text:
                                slide_text.append(elem.text)
                
                # Parse Scale Relationships for Images
                # Rel file: ppt/slides/_rels/slideX.xml.rels
                rel_file = f"ppt/slides/_rels/slide{slide_num}.xml.rels"
                
                if rel_file in z.namelist():
                    with z.open(rel_file) as rf:
                        rel_tree = ET.parse(rf)
                        rel_root = rel_tree.getroot()
                        # ns_rel = {'r': 'http://schemas.openxmlformats.org/package/2006/relationships'}
                        
                        for rel in rel_root.iter():
                            if rel.tag.endswith('}Relationship'):
                                target = rel.attrib.get('Target')
                                type_ = rel.attrib.get('Type')
                                
                                # Check if it is an image
                                if 'image' in type_:
                                    # Target is usually relative like "../media/image1.png"
                                    # We need to resolve it to "ppt/media/image1.png"
                                    media_path = target.replace('../', 'ppt/')
                                    
                                    # Extract the file
                                    if media_path in z.namelist():
                                        filename = os.path.basename(media_path)
                                        # Use a unique name to avoid overwriting if different slides use different 'image1.png' (though usually global unique in zip)
                                        # Actually in pptx zip, media filenames are global.
                                        
                                        target_path = os.path.join(output_dir, filename)
                                        
                                        if not os.path.exists(target_path):
                                            with z.open(media_path) as source, open(target_path, "wb") as dest:
                                                shutil.copyfileobj(source, dest)
                                        
                                        slide_images.append(filename)

                data.append({
                    "slide": slide_num,
                    "text": slide_text,
                    "images": slide_images
                })

        with open(output_json, 'w', encoding='utf-8') as jf:
            json.dump(data, jf, ensure_ascii=False, indent=4)
            
        print(f"Extraction complete. Data saved to {output_json}")

    except Exception as e:
        print(f"Error: {e}")

extract_data()
