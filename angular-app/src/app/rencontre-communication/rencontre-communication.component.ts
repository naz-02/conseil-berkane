
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-rencontre-communication',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './rencontre-communication.component.html',
    styles: []
})
export class RencontreCommunicationComponent implements OnInit {
    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Rencontre de Communication | Conseil Provincial de Berkane'
            : 'لقاء تواصلي | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Détails de la rencontre de communication organisée par le Conseil Provincial de Berkane.'
                : 'تفاصيل اللقاء التواصلي المنظم من طرف المجلس الإقليمي لبركان.'
        });
    }
}
