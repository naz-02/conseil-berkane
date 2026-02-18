import json
import re

input_file = 'pptx_data.json'
output_file = 'projects_data_refined.ts'

# Specific Sectors Mapping
SECTORS = {
    'Social': 'القطاع الإجتماعي',
    'WaterElectricity': 'القطاع الماء الصالح للشرب والكهرباء',
    'Health': 'القطاع الصحة وحفظ الصحة',
    'Economic': 'القطاع التشغيل و التنمية الإقتصادية',
    'Education': 'القطاع التعليم و النقل المدرسي',
    'Roads': 'القطاع الطرق والمسالك',
    'Environment': 'القطاع البيئة'
}

MAIN_PROJECTS = [
    'دار الثقافة',
    'تهيئة شارع محمد الخامس أحفير', 
    'ممر تحت أرضي ببركان'    
]

def clean_text(text):
    return text.strip().replace("'", "\\'")

def extract_cost(text_lines):
    # Regex to find currency patterns like "100 000,00" or "100.000,00 DH"
    for line in text_lines:
        if any(c in line for c in ['DH', 'درهم', ',00']):
            # cleanup
            return clean_text(line)
    return "Non spécifié / غير محدد"

def extract_location(text_lines):
    for line in text_lines:
        if 'جماعة' in line:
            return clean_text(line)
    return "Province de Berkane / إقليم بركان"

def categorize(description):
    desc = description.lower()
    
    # Specific Keyword Matching for requested sectors
    if any(k in desc for k in ['ماء', 'كهرباء', 'إنارة', 'تزويد', 'شروب', 'solar', 'eau', 'electricité']):
        return SECTORS['WaterElectricity']
    
    if any(k in desc for k in ['صحة', 'مستشفى', 'طبية', 'بصر', 'sanitary', 'santé', 'medical']):
        return SECTORS['Health']
        
    if any(k in desc for k in ['مدرسة', 'تعليم', 'جامعة', 'نواة', 'حافلة', 'نقل مدرسي', 'scolaire', 'education', 'bus']):
        return SECTORS['Education']
        
    if any(k in desc for k in ['طريق', 'مسلك', 'قنطرة', 'منشأة', 'ممر', 'route', 'piste', 'pont']):
        return SECTORS['Roads']
        
    if any(k in desc for k in ['سوق', 'منتوجات', 'تجاري', 'economie', 'economic']):
        return SECTORS['Economic']

    if any(k in desc for k in ['بيئة', 'فياضات', 'wad', 'oued', 'inondation', 'environment']):
        return SECTORS['Environment']
    
    # Default to Social for others (Culture, Sport, Associations fall here broadly or need specific mapping if user separates them)
    # The user didn't specify Sport or Culture explicitly in the list, but 'القطاع الإجتماعي' covers a lot.
    # We can put Sport/Culture into Social.
    return SECTORS['Social']

def process_projects():
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)

        projects_ts = []
        id_counter = 1

        for slide in data:
            if slide['images'] and slide['text']:
                title = clean_text(slide['text'][0])
                # Heuristic: verify if it's really a project slide (has images)
                
                description = " ".join([clean_text(t) for t in slide['text']])
                
                category = categorize(description)
                cost = extract_cost(slide['text'])
                location = extract_location(slide['text'])
                image_path = f"assets/images/projets_extracted/{slide['images'][0]}" # Use first image
                
                # Check images array for gallery
                gallery = [f"assets/images/projets_extracted/{img}" for img in slide['images']]
                
                is_main = any(m in title for m in MAIN_PROJECTS)
                
                ts_obj = f"""
    {{
        id: {id_counter},
        titleFr: '{title}', 
        titleAr: '{title}',
        category: '{category}',
        imageUrl: '{image_path}',
        gallery: {json.dumps(gallery)},
        descriptionFr: '{title}',
        descriptionAr: '{description}',
        cost: '{cost}',
        location: '{location}',
        status: 'Achevé',
        isMain: {'true' if is_main else 'false'}
    }}"""
                projects_ts.append(ts_obj)
                id_counter += 1

        content = "export const PROJECTS_DATA = [" + ",".join(projects_ts) + "\n];"
        
        with open(output_file, 'w', encoding='utf-8') as out:
            out.write(content)
            
        print(f"Refined {len(projects_ts)} projects.")

    except Exception as e:
        print(f"Error: {e}")

process_projects()
