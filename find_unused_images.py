import os

def find_unused_images(assets_dir, src_dir):
    # 1. Collect all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp', '.bmp', '.ico'}
    images = []
    for root, dirs, files in os.walk(assets_dir):
        for file in files:
            if any(file.lower().endswith(ext) for ext in image_extensions):
                # Store relative path from assets_dir, e.g., "images/logo.jpg"
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, assets_dir)
                # Also store just the filename because sometimes people reference just "logo.jpg" if in same dir (though less likely with assets)
                # But more importantly, angular assets are often referenced as "assets/..."
                images.append({'full_path': full_path, 'rel_path': rel_path, 'filename': file})

    # 2. Collect all source content
    source_content = ""
    text_extensions = {'.html', '.ts', '.css', '.scss', '.json', '.js'}
    for root, dirs, files in os.walk(src_dir):
        # Skip node_modules if it happens to be there (though it shouldn't be in src)
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
            
        for file in files:
            if any(file.lower().endswith(ext) for ext in text_extensions):
                try:
                    with open(os.path.join(root, file), 'r', encoding='utf-8', errors='ignore') as f:
                        source_content += f.read()
                except Exception as e:
                    print(f"Error reading {file}: {e}")

    # 3. Check for usage
    unused_images = []
    for img in images:
        # Check for "assets/images/filename.jpg" or just "filename.jpg"
        # We need to be careful. Normalize separators.
        # Angular uses forward slashes.
        
        # We search for the filename at minimum to be safe. 
        # If "logo.jpg" is in the content, we assume it's used.
        # This might be a false negative (saying it is used when it's not if there's a comment), 
        # but it avoids false positives (deleting a used file).
        
        if img['filename'] not in source_content:
            unused_images.append(img['full_path'])
    
    return unused_images

if __name__ == "__main__":
    assets_path = r"c:\Users\Nasr\Desktop\newx site\angular-app\src\assets"
    src_path = r"c:\Users\Nasr\Desktop\newx site\angular-app\src"
    
    unused = find_unused_images(assets_path, src_path)
    
    with open('unused_images_list.txt', 'w', encoding='utf-8') as f:
        for img in unused:
            f.write(img + '\n')
    
    print(f"Found {len(unused)} unused images. Saved to unused_images_list.txt")
