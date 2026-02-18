import os
import shutil

def move_unused_to_trash(list_file, trash_root):
    if not os.path.exists(trash_root):
        os.makedirs(trash_root)
        
    with open(list_file, 'r', encoding='utf-8') as f:
        files = [line.strip() for line in f if line.strip()]

    moved_count = 0
    assets_root = r"c:\Users\Nasr\Desktop\newx site\angular-app\src\assets"

    for file_path in files:
        if os.path.exists(file_path):
            # Calculate relative path to preserve structure in trash
            # e.g. images/foo.jpg
            try:
                rel_path = os.path.relpath(file_path, assets_root)
            except ValueError:
                # Fallback if on different drive (unlikely here)
                rel_path = os.path.basename(file_path)

            dest_path = os.path.join(trash_root, rel_path)
            dest_dir = os.path.dirname(dest_path)
            
            if not os.path.exists(dest_dir):
                os.makedirs(dest_dir)
                
            shutil.move(file_path, dest_path)
            moved_count += 1
            print(f"Moved: {rel_path}")
        else:
            print(f"File not found (skipped): {file_path}")

    print(f"Successfully moved {moved_count} files to {trash_root}")

if __name__ == "__main__":
    list_file = "unused_images_list.txt"
    trash_dir = r"c:\Users\Nasr\Desktop\newx site\angular-app\src\assets\_trash"
    move_unused_to_trash(list_file, trash_dir)
