from PIL import Image
import os

# List of files to process
files = [
    "abdelkader 3.jpg",
    "badaoui 2.jpg",
    "bouyaalaoui 2.jpg",
    "farida 2.jpg",
    "ghizlan 2.jpg",
    "majda 2.jpg"
]

base_dir = r"c:\Users\Nasr\Desktop\newx site"
output_dir = r"c:\Users\Nasr\Desktop\newx site\angular-app\src\assets\images"

def convert_to_transparent(filename):
    input_path = os.path.join(base_dir, filename)
    name_no_ext = os.path.splitext(filename)[0].replace(" ", "_")
    output_filename = f"{name_no_ext}_new.png" # Saving as .png
    output_path = os.path.join(output_dir, output_filename)

    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        return

    print(f"Processing {filename}...")
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    # Threshold for "white"
    threshold = 240 

    for item in datas:
        # Check if pixel is close to white
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            newData.append((255, 255, 255, 0)) # Make transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved to {output_path}")

for f in files:
    convert_to_transparent(f)
