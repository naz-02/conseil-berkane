
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-ressources',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ressources.component.html',
    styleUrl: './ressources.component.css'
})
export class RessourcesComponent implements OnInit {
    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Ressources Numériques | Conseil Provincial de Berkane'
            : 'الموارد الرقمية | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Accédez aux ressources numériques, documents officiels et archives du Conseil Provincial de Berkane.'
                : 'الولوج إلى الموارد الرقمية، الوثائق الرسمية وأرشيف المجلس الإقليمي لبركان.'
        });
    }
}
