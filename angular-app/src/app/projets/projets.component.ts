import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { ProjectsService, Project } from '../projects.service';
import { RouterModule } from '@angular/router';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-projets',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './projets.component.html',
    styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
    activeCategory: string = 'All';
    /* 
       Updated categories mapping based on user request.
       The keys here MUST match the exact string 'category' stored in projects-data.ts
    */
    categories: string[] = [
        'All',
        'دعم القطاع التعليمي',
        'دعم القطاع الإجتماعي',
        'دعم القطاع الصحي',
        'دعم القطاع الثقافي و الرياضي',
        'إنجاز و صيانة المسالك القروية',
        'تزويد العالم القروي بالكهرباء و الماء الصالح للشرب'
    ];

    projects: Project[] = [];

    constructor(
        public langService: LanguageService,
        private projectsService: ProjectsService,
        private seoService: SeoService
    ) { }

    ngOnInit() {
        const title = this.langService.currentLang() === 'fr'
            ? 'Projets de Développement | Conseil Provincial de Berkane'
            : 'مشاريع التنمية | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Découvrez les projets de développement provincial à Berkane : infrastructure, social, santé et éducation.'
                : 'اكتشف مشاريع التنمية بإقليم بركان: البنية التحتية، القطاع الاجتماعي، الصحة والتعليم.'
        });

        this.projects = this.projectsService.getProjects();
    }

    get filteredProjects() {
        if (this.activeCategory === 'All') {
            return this.projects;
        }
        return this.projects.filter(p => p.category === this.activeCategory);
    }

    setCategory(cat: string) {
        this.activeCategory = cat;
    }

    getCategoryLabel(cat: string): string {
        if (cat === 'All') return this.langService.currentLang() === 'fr' ? 'Tous' : 'الكل';

        // Map Arabic categories to French for display if needed
        const map: { [key: string]: string } = {
            'دعم القطاع التعليمي': 'Soutien au secteur scolaire',
            'دعم القطاع الإجتماعي': 'Soutien au secteur social',
            'دعم القطاع الصحي': 'Soutien au secteur de la santé',
            'دعم القطاع الثقافي و الرياضي': 'Soutien au secteur culturel et sportif',
            'إنجاز و صيانة المسالك القروية': 'Réalisation et entretien des pistes rurales',
            'تزويد العالم القروي بالكهرباء و الماء الصالح للشرب': 'Approvisionnement en électricité et eau potable'
        };

        if (this.langService.currentLang() === 'fr') {
            return map[cat] || cat;
        }
        return cat;
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
}
