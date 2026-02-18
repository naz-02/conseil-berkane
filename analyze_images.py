from PIL import Image
import os

def analyze_corner(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        width, height = img.size
        # Check corners
        corners = [
            (0, 0),
            (width - 1, 0),
            (0, height - 1),
            (width - 1, height - 1)
        ]
        print(f"Analyzing {os.path.basename(image_path)}:")
        for x, y in corners:
            pixel = img.getpixel((x, y))
            print(f"  Corner ({x}, {y}): {pixel}")
            
    except Exception as e:
        print(f"Error analyzing {image_path}: {e}")

image_dir = r"c:\Users\Nasr\Desktop\newx site\angular-app\src\assets\images"
target_images = [
    "president.png",
    "member-mohamed-el-badaoui.png", # Correction of filename if needed
    "membre-mohamed-el-badaoui.png"
]

for img_name in target_images:
    path = os.path.join(image_dir, img_name)
    if os.path.exists(path):
        analyze_corner(path)
    else:
        print(f"File not found: {path}")
