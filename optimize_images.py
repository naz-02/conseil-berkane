from PIL import Image
import os

def optimize_images():
    # List of files to optimize
    files_to_optimize = [
        {"path": "angular-app/src/assets/images/president-fixed.png", "max_width": 800, "quality": 85},
        {"path": "angular-app/src/assets/images/icon_beneficiaries_vector.png", "max_width": 400, "quality": 85},
         {"path": "angular-app/src/assets/images/icon_classroom_vector.png", "max_width": 400, "quality": 85},
          {"path": "angular-app/src/assets/images/icon_commune_vector.png", "max_width": 400, "quality": 85}
    ]

    for file_info in files_to_optimize:
        file_path = file_info["path"]
        if os.path.exists(file_path):
            print(f"Optimizing {file_path}...")
            try:
                with Image.open(file_path) as img:
                    # Resize if needed
                    if img.width > file_info["max_width"]:
                        ratio = file_info["max_width"] / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((file_info["max_width"], new_height), Image.Resampling.LANCZOS)
                    
                    # Save with compression
                    # Preserve format
                    img.save(file_path, optimize=True, quality=file_info["quality"])
                    print(f"Done: {file_path}")
            except Exception as e:
                print(f"Error optimizing {file_path}: {e}")
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    optimize_images()
