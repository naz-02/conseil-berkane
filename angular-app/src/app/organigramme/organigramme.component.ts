import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-organigramme',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './organigramme.component.html',
    styleUrl: './organigramme.component.css'
})
export class OrganigrammeComponent implements OnInit {
    viewType: 'selection' | 'conseil' | 'administratif' = 'selection';

    // Modal state
    selectedBoxElement: Element | null = null;
    isModalOpen = false;

    constructor(
        public langService: LanguageService,
        private route: ActivatedRoute,
        private router: Router,
        private seoService: SeoService
    ) { }

    ngOnInit() {
        const title = this.langService.currentLang() === 'fr'
            ? 'Organigramme | Conseil Provincial de Berkane'
            : 'الهيكل التنظيمي | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Consultez l\'organigramme administratif et du conseil de la province de Berkane.'
                : 'اطلع على الهيكل التنظيمي الإداري والمجلس بإقليم بركان.'
        });

        this.route.url.subscribe(url => {
            const path = url[0]?.path;
            if (path && path.includes('conseil')) {
                this.viewType = 'conseil';
            } else if (path && path.includes('administratif')) {
                this.viewType = 'administratif';
            } else {
                this.viewType = 'selection';
            }
        });
    }

    onChartClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const box = target.closest('.org-box');
        if (box) {
            this.selectedBoxElement = box;
            this.isModalOpen = true;
        }
    }

    closeModal() {
        this.isModalOpen = false;
        this.selectedBoxElement = null;
    }

    get selectedPerson() {
        if (!this.selectedBoxElement) return null;

        const lang = this.langService.currentLang();
        const box = this.selectedBoxElement;

        const nameAttr = box.getAttribute(`data-name-${lang}`);
        const image = box.getAttribute('data-image');
        const roleAttr = box.getAttribute(`data-role-${lang}`);
        // We need to re-query the person name based on current DOM state or assume it doesn't change by lang if it's a name
        // Use getBoxName logic if person name is bilingual in template, but usually person name is inside h5
        // Best strategy: extract all attributes freshly

        // Actually, person-name might be inside the box. 
        // If content is bilingual using {{ }}, the DOM textContent will update automatically!
        // So querySelector('.person-name').textContent will be correct for current lang.
        const personName = box.querySelector('.person-name')?.textContent || '';

        return {
            name: personName ? personName.trim() : (nameAttr || ''),
            title: nameAttr || '',
            image: image || undefined,
            role: roleAttr || ''
        };
    }

    // Helper for box translation in template
    getBoxName(fr: string, ar: string): string {
        return this.langService.currentLang() === 'fr' ? fr : ar;
    }
}
