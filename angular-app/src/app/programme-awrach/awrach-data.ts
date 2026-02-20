export interface AwrachWorkshop {
    id: number;
    titleFr: string;
    titleAr: string;
    locationFr?: string;
    locationAr?: string;
    type: 'sustainable' | 'temporary';
    year?: string;
    imageUrl?: string;
    icon?: string;
}

export const AWRACH_DATA: {
    titleFr: string;
    titleAr: string;
    descriptionFr: string;
    descriptionAr: string;
    stats: { labelFr: string; labelAr: string; value: string; icon: string; imageUrl?: string }[];
    workshops: AwrachWorkshop[];
} = {
    titleFr: "Programme Awrach 2022-2023",
    titleAr: "برنامج أوراش 2022-2023",
    descriptionFr: "Programmes de chantiers temporaires pour la création d'emplois directs et la promotion de l'inclusion économique.",
    descriptionAr: "برنامج أوراش عامة مؤقتة لخلق فرص شغل مباشرة وتحقيق الإدماج الاقتصادي.",
    stats: [
        { labelFr: "Salles de classe", labelAr: "حجرات للدعم التربوي", value: "+100", icon: "class", imageUrl: "assets/images/icon_classroom_vector.png" },
        { labelFr: "Communes ciblées", labelAr: "الجماعات المستهدفة", value: "16", icon: "location_city", imageUrl: "assets/images/icon_commune_vector.png" },
        { labelFr: "Bénéficiaires", labelAr: "مستفيد", value: "1996", icon: "groups", imageUrl: "assets/images/icon_beneficiaries_vector.png" }
    ],
    workshops: [
        {
            id: 1,
            titleFr: "Soutien scolaire",
            titleAr: "الدعم التربوي لفائدة التلاميذ",
            type: "temporary",
            icon: "school",
            imageUrl: "assets/images/awrach_extracted/slide_3_image_7.jpg"
        },
        {
            id: 2,
            titleFr: "Entretien des points noirs",
            titleAr: "ورش تنقية النقط السوداء",
            locationFr: "Tafoughalt, Sidi Slimane Charraa, Berkane",
            locationAr: "تافوغالت، سيدي سليمان شراعة، بركان",
            type: "temporary",
            icon: "cleaning_services",
            imageUrl: "assets/images/awrach_extracted/slide_4_image_12.jpg"
        },
        {
            id: 3,
            titleFr: "Numérisation et organisation des archives",
            titleAr: "رقمنة و تنظيم الأرشيف",
            type: "temporary",
            icon: "inventory_2",
            imageUrl: "assets/images/awrach_extracted/slide_5_image_16.jpg"
        },
        {
            id: 4,
            titleFr: "Entretien des points noirs",
            titleAr: "ورش تنقية النقط السوداء",
            locationFr: "Ain Reggada, Ahfir, Rislane",
            locationAr: "عين الركادة، أحفير، رسلان",
            type: "temporary",
            icon: "cleaning_services",
            imageUrl: "assets/images/awrach_extracted/slide_6_image_20.jpg"
        },
        {
            id: 5,
            titleFr: "Entretien des points noirs",
            titleAr: "ورش تنقية النقط السوداء",
            locationFr: "Aghbal, Laathamna, Ain Reggada",
            locationAr: "أغبال، لعثامنة، عين الركادة",
            type: "temporary",
            icon: "cleaning_services",
            imageUrl: "assets/images/awrach_extracted/slide_7_image_25.jpg"
        },
        {
            id: 6,
            titleFr: "Gardiennage et propreté des établissements scolaires",
            titleAr: "الحراسة والنظافة بالمؤسسات التعليمية والمقاطعات الحضرية",
            type: "temporary",
            icon: "security",
            imageUrl: "assets/images/awrach_gardiennage.png"
        },
        {
            id: 7,
            titleFr: "Nettoyage et désherbage des routes",
            titleAr: "أشغال تنقية المخلفات و إزالة الأعشاب بالطرق الإقليمية والوطنية",
            type: "temporary",
            icon: "agriculture",
            imageUrl: "assets/images/awrach_extracted/slide_9_image_35.jpg"
        },
        {
            id: 8,
            titleFr: "Surveillance des forêts (Été)",
            titleAr: "حراسة الغابات في فصل الصيف",
            type: "temporary",
            icon: "forest",
            imageUrl: "assets/images/awrach_extracted/slide_10_image_39.jpg"
        },
        {
            id: 9,
            titleFr: "Aménagement de sentiers forestiers",
            titleAr: "ورش تهيئة ممرات المشي بالمناطق الغابوية",
            locationFr: "Beni Bouabdallah, Jbel Bouhammad, Tafoughalt",
            locationAr: "بني بوعبدالله، جبل بوحماد، تافوغالت",
            type: "temporary",
            icon: "hiking",
            imageUrl: "assets/images/awrach_extracted/slide_11_image_42.png"
        },
        {
            id: 10,
            titleFr: "Arrachage de cactus (Cochenille)",
            titleAr: "قلع الصبار المصاب بالحشرة القرمزية",
            locationFr: "Rislane",
            locationAr: "جماعة رسلان",
            type: "temporary",
            icon: "pest_control",
            imageUrl: "assets/images/awrach_extracted/slide_12_image_45.png"
        },
        {
            id: 11,
            titleFr: "Soutien au secteur de la santé",
            titleAr: "دعم القطاع الصحي",
            locationFr: "Ain Reggada",
            locationAr: "جماعة عين الركادة",
            type: "temporary",
            icon: "medical_services",
            imageUrl: "assets/images/awrach_extracted/slide_13_image_46.jpg"
        },
        {
            id: 12,
            titleFr: "Accompagnement des personnes en situation de handicap",
            titleAr: "مواكبة و مرافقة الأشخاص في وضعية إعاقة",
            type: "temporary",
            icon: "accessible",
            imageUrl: "assets/images/awrach_extracted/slide_14_image_50.jpg"
        },
        {
            id: 13,
            titleFr: "Ateliers de formation professionnelle",
            titleAr: "تأطير ورشات التكوين الحرفي",
            type: "temporary",
            icon: "handyman",
            imageUrl: "assets/images/awrach_extracted/slide_15_image_53.jpg"
        },
        {
            id: 14,
            titleFr: "Animation éducative, sportive et touristique",
            titleAr: "التنشيط التربوي والرياضي والسياحي",
            type: "temporary",
            icon: "sports_soccer",
            imageUrl: "assets/images/awrach_extracted/slide_16_image_55.jpg"
        },
        {
            id: 15,
            titleFr: "Campagnes de sensibilisation aux premiers secours",
            titleAr: "تنظيم حملات تحسيسية حول الإسعافات الأولية",
            type: "temporary",
            icon: "medical_information",
            imageUrl: "assets/images/awrach_extracted/slide_18_image_64.jpg"
        },
        {
            id: 16,
            titleFr: "Organisation et nettoyage de la plage (Saidia)",
            titleAr: "عملية التنظيم بالشاطئ و التنقية بجماعة السعيدية",
            locationFr: "Saidia",
            locationAr: "السعيدية",
            type: "temporary",
            icon: "beach_access",
            imageUrl: "assets/images/awrach_extracted/slide_19_image_68.jpg"
        }
    ]
};
