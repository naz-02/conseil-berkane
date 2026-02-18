from PIL import Image
import os
import sys

# Increase recursion depth just in case, though we use stack.
sys.setrecursionlimit(10000)

def flood_fill_white(image_path):
    try:
        print(f"Processing {os.path.basename(image_path)}...")
        img = Image.open(image_path)
        img = img.convert("RGBA")
        width, height = img.size
        # Get data as a list of pixels to avoid function call overhead of getpixel/putpixel
        pixels = img.load()
        
        # Temporary color for visited (Green)
        temp_color = (0, 255, 0, 255)
        # Target color (White)
        target_color = (255, 255, 255, 255)
        
        # Start from all corners
        stack = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
        
        # Tolerance check for background colors
        def is_bg(r, g, b, a):
            current = (r, g, b, a)
            if current == temp_color: return False
            if current == target_color: return False
            
            # White squares (usually > 240)
            if r > 240 and g > 240 and b > 240: return True
            # Grey squares (usually around 230 or 204)
            # 204 is common for checkerboard. 230 also.
            if r > 180 and r < 245 and abs(r-g) < 20 and abs(r-b) < 20: return True
            return False

        while stack:
            x, y = stack.pop()
            
            if x < 0 or x >= width or y < 0 or y >= height:
                continue
                
            r, g, b, a = pixels[x, y]
            
            if is_bg(r, g, b, a):
                pixels[x, y] = temp_color
                
                # Add neighbors
                if x + 1 < width: stack.append((x+1, y))
                if x - 1 >= 0: stack.append((x-1, y))
                if y + 1 < height: stack.append((x, y+1))
                if y - 1 >= 0: stack.append((x, y-1))
        
        # Now replace temp color with white
        data = img.getdata()
        new_data = []
        for item in data:
            if item == temp_color:
                new_data.append(target_color)
            else:
                new_data.append(item)
        img.putdata(new_data)
        
        print(f"Fixed background for {os.path.basename(image_path)}")
        img.save(image_path)
        
    except Exception as e:
        print(f"Error fixing {image_path}: {e}")

image_dir = r"c:\Users\Nasr\Desktop\newx site\angular-app\src\assets\images"
files = os.listdir(image_dir)

target_prefixes = ["president", "vice-president", "secretaire", "vice-secretaire", "president-comite", "membre"]

count = 0
for f in files:
    if f.endswith(".png"):
        for prefix in target_prefixes:
            if f.startswith(prefix):
                path = os.path.join(image_dir, f)
                flood_fill_white(path)
                count += 1
                break
print(f"Processed {count} images.")
