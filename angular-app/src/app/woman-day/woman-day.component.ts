import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-woman-day',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './woman-day.component.html',
    styles: []
})
export class WomanDayComponent implements OnInit {
    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Journée Internationale des Droits des Femmes | Conseil Provincial de Berkane'
            : 'اليوم العالمي للمرأة | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Le Conseil Provincial de Berkane célèbre la journée internationale des droits des femmes.'
                : 'المجلس الإقليمي لبركان يحتفل باليوم العالمي للمرأة.'
        });
    }
}
