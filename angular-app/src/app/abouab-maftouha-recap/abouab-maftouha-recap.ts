import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-abouab-maftouha-recap',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './abouab-maftouha-recap.html',
    styles: []
})
export class AbouabMaftouhaRecapComponent implements OnInit {
    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Vidéo Portes Ouvertes 2026 | Conseil Provincial de Berkane'
            : 'فيديو الأبواب المفتوحة 2026 | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Le Conseil a abrité les portes ouvertes les 15 et 16 avril.'
                : 'إحتضن المجلس الإقليمي تظاهرة الأبواب المفتوحة أيام 15 و16 أبريل'
        });
    }
}
