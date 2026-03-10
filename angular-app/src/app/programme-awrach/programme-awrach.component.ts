import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';
import { AWRACH_DATA, AwrachWorkshop } from './awrach-data';

@Component({
    selector: 'app-programme-awrach',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './programme-awrach.component.html',
    styleUrls: ['./programme-awrach.component.css']
})
export class ProgrammeAwrachComponent implements OnInit {
    data = AWRACH_DATA;

    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Programme Awrach | Conseil Provincial de Berkane'
            : 'برنامج أوراش | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Découvrez le programme Awrach : chantiers citoyens et opportunités d\'insertion professionnelle dans la province de Berkane.'
                : 'تعرف على برنامج أوراش: أوراش عامة مؤقتة وفرص للإدماج المهني بإقليم بركان.'
        });

        // Initial scroll to top
        window.scrollTo(0, 0);
    }

    get workshops(): AwrachWorkshop[] {
        return this.data.workshops;
    }
}
