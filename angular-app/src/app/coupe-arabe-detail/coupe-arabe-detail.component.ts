import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-coupe-arabe-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './coupe-arabe-detail.component.html',
    styles: []
})
export class CoupeArabeDetailComponent implements OnInit {
    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Participation à la Coupe Arabe | Conseil Provincial de Berkane'
            : 'المشاركة في الكأس العربية | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Détails de la participation du Conseil Provincial de Berkane à la Coupe Arabe.'
                : 'تفاصيل مشاركة المجلس الإقليمي لبركان في الكأس العربية.'
        });
    }
}
