
import shutil
import os

source_dir = r"c:\Users\Nasr\Desktop\newx site"
dest_dir = r"c:\Users\Nasr\Desktop\newx site\angular-app\src\assets\images\partners"

files_map = {
    "agence de l'oriontal.jpeg": "agence_oriental.jpeg",
    "commune aghbal.jpeg": "commune_aghbal.jpeg",
    "commune ain raggada.jpeg": "commune_ain_raggada.jpeg",
    "commune berkane.jpeg": "commune_berkane.jpeg",
    "commune sidi sliman ech-charaa.jpeg": "commune_sidi_slimane.jpeg",
    "commune de chouihia.jpeg": "commune_chouihia.jpeg",
    "consiell pro.jpeg": "conseil_provincial.jpeg",
    "Direction generale des collectivites Territoriales.jpeg": "dgcl.jpeg",
    "Ministère de l'Équipement et du Transport.jpeg": "ministere_equipement.jpeg",
    "office regional de mise en valeur agricole moulouya.jpeg": "ormvam.jpeg",
    "وزارة الشباب و الثقافة.jpeg": "ministere_culture.jpeg",
    "وزارة الداخلية.jpeg": "ministere_interieur.jpeg"
}

for src_name, dest_name in files_map.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        try:
            shutil.copy2(src_path, dest_path)
            print(f"Copied: {src_name} -> {dest_name}")
        except Exception as e:
            print(f"Error copying {src_name}: {e}")
    else:
        print(f"Source not found: {src_path}")
