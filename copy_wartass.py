import shutil
import os

source_dir = r"c:\Users\Nasr\Desktop\newx site"
dest_dir = r"c:\Users\Nasr\Desktop\newx site\angular-app\src\assets\images\projets_extracted"

mappings = [
    # Wartass Bridge
    ("قنطرة على واد ورطاس 1.jpeg", "wartass_bridge_1.jpg"),
    ("قنطرة على واد ورطاس 2.jpeg", "wartass_bridge_2.jpg"),
    ("قنطرة على واد ورطاس 3.jpeg", "wartass_bridge_3.jpg"),
    ("قنطرة على واد ورطاس 4.jpeg", "wartass_bridge_4.jpg"),
    ("قنطرة على واد ورطاس 5.jpeg", "wartass_bridge_5.jpg"),
]

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

print("Starting Wartass copy...")
for src_name, dest_name in mappings:
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        try:
            shutil.copy2(src_path, dest_path)
            print(f"Copied: {src_name} -> {dest_name}")
        except Exception as e:
            print(f"Error copying {src_name}: {e}")
    else:
        print(f"Source file not found: {src_name}")

print("Copy operation completed.")
