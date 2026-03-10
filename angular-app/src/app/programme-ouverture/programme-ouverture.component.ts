import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-programme-ouverture',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './programme-ouverture.component.html',
    styleUrl: './programme-ouverture.component.css'
})
export class ProgrammeOuvertureComponent implements OnInit {
    data = [
        {
            icon: "fas fa-laptop-code",
            axisFr: "Renforcement de la Digitalisation et de la Communication",
            axisAr: "تعزيز الرقمنة والتواصل",
            projects: [
                {
                    fr: "Création d'un service de communication avec les citoyens et de coordination avec la société civile.",
                    ar: "خلق مصلحة للتواصل مع المواطنين والتنسيق مع المجتمع المدني.",
                    completed: true
                },
                {
                    fr: "Création et suivi d'une plateforme électronique dédiée au Conseil Provincial.",
                    ar: "إنشاء وتتبع منصة الكترونية خاصة بالمجلس الإقليمي.",
                    completed: false
                },
                {
                    fr: "Production de capsules numériques pour diffusion sur les réseaux sociaux.",
                    ar: "إنتاج كبسولات رقمية للنشر عبر منصات التواصل الاجتماعي.",
                    completed: false
                },
                {
                    fr: "Organisation de journées portes ouvertes pour faire connaître les services et compétences du Conseil Provincial, avec distribution de dépliants numériques et papier.",
                    ar: "تنظيم أيام مفتوحة للتعريف بخدمات واختصاصات المجلس الإقليمي وتوزيع مطويات رقمية وورقية.",
                    completed: false
                },
                {
                    fr: "Mise en place d'un réseau numérique interne pour faciliter l'échange électronique et l'archivage des documents.",
                    ar: "وضع شبكة رقمية داخلية لتسهيل التبادل الالكتروني للوثائق وأرشفتها.",
                    completed: false
                }
            ]
        },
        {
            icon: "fas fa-users",
            axisFr: "Participation Citoyenne et Démocratie Participative",
            axisAr: "المشاركة المواطنة والديموقراطية التشاركية",
            projects: [
                {
                    fr: "Formations au profit des membres des instances et des élus en partenariat avec des centres et services extérieurs, et tenue de rencontres avec les instances aux niveaux local, régional et national pour l'échange d'expériences.",
                    ar: "دورات تكوينية لفائدة أعضاء الهيئات والمنتخبين بشراكة مع مراكز ومصالح خارجية وعقد لقاءات مع الهيئات على الصعيد المحلي الجهوي والوطني لتبادل التجارب والخبرات.",
                    completed: false
                },
                {
                    fr: "Organisation de sessions de sensibilisation au profit de la société civile et des citoyens pour renforcer la communication et impliquer le citoyen dans la prise de décision.",
                    ar: "تنظيم دورات تحسيسية لفائدة فعاليات المجتمع المدني والمواطنين من أجل تعزيز التواصل وإشراك المواطن في اتخاذ القرار.",
                    completed: false
                },
                {
                    fr: "Création d'une plateforme numérique.",
                    ar: "خلق منصة رقمية.",
                    completed: false
                }
            ]
        },
        {
            icon: "fas fa-chart-line",
            axisFr: "Promotion du Développement Économique et Social",
            axisAr: "تعزيز التنمية الاقتصادية والاجتماعية",
            projects: [
                {
                    fr: "Création de petites et moyennes entreprises pour l'intégration des jeunes dans le tissu économique.",
                    ar: "خلق مشاريع صغيرة ومتوسطة لإدماج الشباب في النسيج الاقتصادي.",
                    completed: false
                },
                {
                    fr: "Organisation de foires sur l'économie sociale et solidaire pour valoriser les produits du terroir (à Saïdia, Tafoughalt, Fezouane...).",
                    ar: "تنظيم معارض حول الاقتصاد التضامني والاجتماعي لتثمين المنتوجات المجالية (بالسعيدية، تافوغالت، فزوان...).",
                    completed: false
                },
                {
                    fr: "Création d'une plateforme électronique pour la vente des produits du terroir.",
                    ar: "خلق منصة الكترونية لبيع المنتوجات المجالية.",
                    completed: false
                },
                {
                    fr: "Élaboration d'un guide sur les opportunités d'investissement dans la province.",
                    ar: "إعداد دليل حول الفرص الاستثمارية في الإقليم.",
                    completed: false
                },
                {
                    fr: "Soutien aux projets des femmes en situation de précarité et des personnes aux besoins spécifiques.",
                    ar: "دعم مشاريع النساء في وضعية هشاشة والأشخاص ذوي الاحتياجات الخاصة.",
                    completed: false
                },
                {
                    fr: "Organisation de campagnes de sensibilisation pour les familles afin de réduire la désintégration familiale.",
                    ar: "تنظيم حملات تحسيسية للأسر للتقليص من التفكك الأسري.",
                    completed: false
                }
            ]
        },
        {
            icon: "fas fa-map-marked-alt",
            axisFr: "Attractivité Territoriale et Renforcement de la Compétitivité",
            axisAr: "الجاذبية الترابية وتعزيز تنافسية الإقليم",
            projects: [
                {
                    fr: "Organisation de journées d'étude sectorielles pour valoriser les atouts territoriaux de la province de Berkane afin de la faire connaître et d'en faire un territoire attractif pour l'investissement et le bien-être.",
                    ar: "تنظيم أيام دراسية قطاعية لتثمين المؤهلات الترابية لإقليم بركان من أجل التعريف به وجعله مجالا ترابيا جذابا للاستثمار والعيش الرائع.",
                    completed: false
                },
                {
                    fr: "Réalisation d'un guide sur l'attractivité et la compétitivité de la province.",
                    ar: "إنجاز دليل الجاذبية وتنافسية الإقليم.",
                    completed: false
                },
                {
                    fr: "Renforcement des jumelages et échange de visites et d'expériences avec des territoires similaires.",
                    ar: "تعزيز التوأمات وتبادل الزيارات والتجارب مع مجالات ترابية مشابهة.",
                    completed: false
                }
            ]
        }
    ];

    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Programme Ouverture | Conseil Provincial de Berkane'
            : 'برنامج الانفتاح | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Consultez les axes et projets du programme d\'Ouverture du Conseil Provincial de Berkane.'
                : 'اطلع على محاور ومشاريع برنامج الانفتاح للمجلس الإقليمي لبركان.'
        });
    }
}
