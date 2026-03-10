import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectsService, Project } from '../projects.service';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-projet-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './projet-detail.component.html',
    styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {
    project: Project | undefined;
    relatedProjects: Project[] = [];
    activeImage: string = '';

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService,
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = +params['id'];
            this.loadProject(id);
        });
    }

    loadProject(id: number) {
        this.project = this.projectsService.getProjectById(id);
        if (this.project) {
            this.activeImage = this.project.imageUrl;
            this.relatedProjects = this.projectsService.getRelatedProjects(this.project.category || '', id);

            // Set Dynamic SEO
            const title = this.langService.currentLang() === 'fr'
                ? `${this.project.titleFr} | Conseil Provincial de Berkane`
                : `${this.project.titleAr} | المجلس الإقليمي لبركان`;

            this.seoService.setMetaTags({
                title: title,
                description: this.langService.currentLang() === 'fr'
                    ? this.project.descriptionFr
                    : this.project.descriptionAr,
                image: this.project.imageUrl
            });

            window.scrollTo(0, 0);
        }
    }

    setActiveImage(img: string) {
        this.activeImage = img;
    }

    getStatusLabel(status: string): string {
        if (this.langService.currentLang() === 'fr') return status;

        const map: { [key: string]: string } = {
            'Réalisé': 'منجز',
            'Achevé': 'منجز',
            'En cours': 'في طور الإنجاز',
            'Programmé': 'مبرمج'
        };
        return map[status] || status;
    }

    getCategoryLabel(cat: string): string {
        if (cat === 'All') return this.langService.currentLang() === 'fr' ? 'Tous' : 'الكل';

        const map: { [key: string]: string } = {
            'قطاع الإجتماعي و الثقافي': 'Secteur Social et Culturel',
            'قطاع الماء الصالح للشرب والكهرباء': 'Eau Potable et Électricité',
            'قطاع الصحة': 'Secteur de la Santé',
            'قطاع التعليم و النقل المدرسي': 'Enseignement et Transport Scolaire',
            'قطاع الطرق و المسالك القروية': 'Routes et Pistes Rurales',
            'تقوية البنيات التحتية': 'Renforcement des Infrastructures',
            'إنعاش الشغل': 'Promotion de l\'Emploi',
            'قطاع تشغيل وتنمية إقتصادية': 'Emploi et Développement Économique',
            'emploi': 'Emploi'
        };

        if (this.langService.currentLang() === 'fr') {
            return map[cat] || cat;
        }
        return cat;
    }
}
