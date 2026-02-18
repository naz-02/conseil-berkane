import zipfile
import xml.etree.ElementTree as ET
import re
import os

pptx_file = 'rcap 2021-2025 projets.pptx'

def extract_text_from_pptx(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return

    try:
        with zipfile.ZipFile(path, 'r') as z:
            # Find all slide XML files
            slides = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            
            # Sort slides by number (slide1, slide2, ..., slide10)
            def get_slide_number(name):
                match = re.search(r'slide(\d+)\.xml', name)
                return int(match.group(1)) if match else 0
            
            slides.sort(key=get_slide_number)

            print(f"Found {len(slides)} slides.\n")

            for i, slide_file in enumerate(slides):
                formatted_text = []
                print(f"--- Slide {i+1} ---")
                
                with z.open(slide_file) as f:
                    tree = ET.parse(f)
                    root = tree.getroot()
                    
                    # Namespace map (might vary, but usually text is in a:t)
                    # We can just iterate all elements and look for 't' tag definition
                    # referencing http://schemas.openxmlformats.org/drawingml/2006/main
                    
                    # Simpler strategy: Extract text from all elements text property
                    # But we want to preserve some structure. 
                    # Usually text is in <a:t>
                    
                    for elem in root.iter():
                        # Check if it looks like a text tag (local name 't')
                        if elem.tag.endswith('}t'):
                            if elem.text:
                                formatted_text.append(elem.text)
                
                print(" ".join(formatted_text))
                print("\n")

    except Exception as e:
        print(f"Error reading file: {e}")

extract_text_from_pptx(pptx_file)
