import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-abouab-maftouha',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './abouab-maftouha.component.html',
    styles: []
})
export class AbouabMaftouhaComponent implements OnInit {
    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Portes Ouvertes 2026 | Conseil Provincial de Berkane'
            : 'الأبواب المفتوحة 2026 | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Le Conseil Provincial de Berkane organise les "Portes Ouvertes" les 15 et 16 avril 2026.'
                : 'ينظم المجلس الإقليمي لبركان تظاهرة “الأبواب المفتوحة” يومي 15 و16 أبريل 2026.'
        });
    }
}
