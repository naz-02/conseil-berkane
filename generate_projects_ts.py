import json
import re

input_file = 'pptx_data.json'
output_file = 'projects_data.txt'

def categorize(text):
    t = text.lower()
    if any(k in t for k in ['مدرسة', 'تعليم', 'نواة', 'جامعية', 'حافلة', 'ايواء', 'طالب', 'اقسام', 'حجرات', 'نقل مدرسي']):
        return 'Enseignement'
    if any(k in t for k in ['ملعب', 'رياضة', 'مركب رياضي', 'قدم']):
        return 'Sport'
    if any(k in t for k in ['ثقافة', 'فضاء', 'جمعية', 'نسيج', 'اجتماع', 'تنمية بشرية', 'طفل', 'مرأة']):
        return 'Social & Culture'
    if any(k in t for k in ['سوق', 'منتوجات', 'تجاري']):
        return 'Economie'
    # Default infrastructure keywords
    if any(k in t for k in ['طريق', 'مسلك', 'قنطرة', 'منشأة', 'انارة', 'كهرباء', 'ماء', 'صالح للشرب', 'تزويد', 'واد', 'فياضات', 'تأهيل', 'تهيئة', 'بناء']):
        return 'Infrastructure'
    
    return 'Infrastructure' # Fallback

def generate_ts():
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)

        projects_ts = []
        
        for slide in data:
            # Only consider slides with images and text
            if slide['images'] and slide['text']:
                # The first line is usually the title
                # We join all text lines for description
                title = slide['text'][0].strip()
                description = " ".join(slide['text']).strip()
                
                # Check duplication? Not for now.
                
                category = categorize(description)
                image_path = f"assets/images/projets_extracted/{slide['images'][0]}"
                
                # Escape quotes
                title = title.replace("'", "\\'")
                description = description.replace("'", "\\'")
                
                ts_obj = f"""
        {{
            titleFr: '{title}', // Placeholder translation
            titleAr: '{title}',
            category: '{category}',
            imageUrl: '{image_path}',
            descriptionFr: 'Projet de {category} : {title}',
            descriptionAr: '{description}',
            status: 'En cours'
        }}"""
                projects_ts.append(ts_obj)

        final_output = "projects: Project[] = [" + ",".join(projects_ts) + "\n    ];"
        
        with open(output_file, 'w', encoding='utf-8') as out:
            out.write(final_output)
            
        print(f"Generated {len(projects_ts)} projects.")

    except Exception as e:
        print(f"Error: {e}")

generate_ts()
