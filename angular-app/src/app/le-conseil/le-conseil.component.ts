import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

export interface Member {
    nameFr: string;
    nameAr: string;
    image: string;
    roleFr: string;
    roleAr: string;
}



@Component({
    selector: 'app-le-conseil',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './le-conseil.component.html',
    styleUrl: './le-conseil.component.css'
})
export class LeConseilComponent {
    members: Member[] = [
        {
            nameFr: 'M. Mohammed Jelloul',
            nameAr: 'السيد محمد جلول',
            image: 'president-pro.jpg',
            roleFr: 'Président du Conseil',
            roleAr: 'رئيس المجلس'
        },
        {
            nameFr: 'M. Farid Bntaha',
            nameAr: 'فريد بنته',
            image: 'member_farid_bntaha_v2.jpg',
            roleFr: '1er Vice-Président',
            roleAr: 'النائب الأول للرئيس'
        },

        {
            nameFr: 'M. Khalid Azzouzi',
            nameAr: 'عزوزي خاليد',
            image: 'member_khalid_azzouzi_v4.jpg',
            roleFr: '2ème Vice-Président',
            roleAr: 'النائب الثاني للرئيس'
        },
        {
            nameFr: 'Mme. Farida Najaoui',
            nameAr: 'فريدة النكاوي',
            image: 'member_farida_najaoui_v2.jpg',
            roleFr: '3ème Vice-Présidente',
            roleAr: 'النائبة الثالثة للرئيس'
        },
        {
            nameFr: 'M. Mohamed Bouyaalaoui',
            nameAr: 'بويعلاوي محمد',
            image: 'member_mohamed_bouyaalaoui_v2.jpg',
            roleFr: 'Secrétaire du Conseil',
            roleAr: 'كاتب المجلس'
        },
        {
            nameFr: 'M. Karim Erradi',
            nameAr: 'راضي كريمي',
            image: 'member_karim_erradi_v3.jpg',
            roleFr: 'Vice-Secrétaire du Conseil',
            roleAr: 'نائب كاتب المجلس'
        },
        {
            nameFr: 'M. Jamal Zriouhi',
            nameAr: 'جمال زريوحي',
            image: 'member_jamal_zriouhi_v2.jpg',
            roleFr: 'Président de la commission du développement rural et urbain, de la promotion des investissements, de l\'eau, de l\'énergie et de l\'environnement',
            roleAr: 'رئيس اللجنة المكلفة بالتنمية القروية و الحضرية و انعاش الاستثمارات و الماء و الطاقة و البيئة'
        },

        {
            nameFr: 'Mme. Majda Benali',
            nameAr: 'ماجدة بنعلي',
            image: 'member_majda_benali_v2.jpg',
            roleFr: 'Vice-Présidente de la commission du développement rural et urbain, de la promotion des investissements, de l\'eau, de l\'énergie et de l\'environnement',
            roleAr: 'نائبة رئيس اللجنة المكلفة بالتنمية القروية و الحضرية وانعاش الاستثمارات و الماء و الطاقة و البيئة'
        },
        {
            nameFr: 'M. Abdelkader Karimi',
            nameAr: 'عبد القادر كريمي',
            image: 'member_abdelkader_karimi_v2.jpg',
            roleFr: 'Président de la commission du budget, des affaires financières et de la programmation',
            roleAr: 'رئيس اللجنة المكلفة بالميزانية و الشؤون المالية و البرمجة'
        },
        {
            nameFr: 'M. Mohamed El Badaoui',
            nameAr: 'محمد البداوي',
            image: 'member_mohamed_el_badaoui_v2.jpg',
            roleFr: 'Vice-Président de la commission du budget, des affaires financières et de la programmation',
            roleAr: 'نائب رئيس اللجنة المكلفة بالميزانية و الشؤون المالية و البرمجة'
        },

        {
            nameFr: 'Mme. Ghizlane Bourada',
            nameAr: 'غزلان بورعدة',
            image: 'member_ghizlane_bourada_v4.jpg',
            roleFr: 'Vice-Présidente de la commission des affaires sociales et de la famille',
            roleAr: 'نائبة رئيسة اللجنة المكلفة بالشؤون الاجتماعية و الاسرة'
        },
        {
            nameFr: 'Mme. Nawal Ahssaini',
            nameAr: 'نوال احسايني',
            image: 'member_nawal_ahssaini_v2.jpg',
            roleFr: 'Membre du Conseil',
            roleAr: 'عضوة بالمجلس'
        },
        {
            nameFr: 'M. Mabrouk El Mrini',
            nameAr: 'مبروك لمريني',
            image: 'member_mabrouk_el_mrini_v3.jpg',
            roleFr: 'Membre du Conseil',
            roleAr: 'عضو بالمجلس'
        },
        {
            nameFr: 'M. Abderrahim Essalhi',
            nameAr: 'عبد الرحيم الصالحي',
            image: 'member_abderrahim_essalhi_v3.jpg',
            roleFr: 'Membre du Conseil',
            roleAr: 'عضو بالمجلس'
        },
        {
            nameFr: 'Mme. Asmahan Nasiri',
            nameAr: 'اسمهان نصيري',
            image: 'member_asmahan_nasiri_v2.jpg',
            roleFr: 'Membre du Conseil',
            roleAr: 'عضوة بالمجلس'
        }
    ];



    get president(): Member {
        return this.members[0];
    }

    get otherMembers(): Member[] {
        return this.members.slice(1);
    }

    constructor(public langService: LanguageService) { }
}
