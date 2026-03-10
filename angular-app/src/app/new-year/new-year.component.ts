import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-new-year',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './new-year.component.html',
    styles: []
})
export class NewYearComponent implements OnInit {
    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Vœux du Nouvel An | Conseil Provincial de Berkane'
            : 'تهنئة بمناسبة السنة الجديدة | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Le Conseil Provincial de Berkane vous souhaite ses meilleurs vœux pour la nouvelle année.'
                : 'المجلس الإقليمي لبركان يهنئكم بمناسبة السنة الجديدة.'
        });
    }
}
