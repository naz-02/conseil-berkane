
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';
import { OnInit } from '@angular/core';
import { SafePipe } from '../safe.pipe'; // Need to create this pipe for iframe src

@Component({
    selector: 'app-loi-organique',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './loi-organique.component.html',
    styleUrl: './loi-organique.component.css'
})
export class LoiOrganiqueComponent implements OnInit {
    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Loi Organique | Conseil Provincial de Berkane'
            : 'القانون التنظيمي | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Consultez la loi organique relative aux préfectures et provinces du Royaume du Maroc.'
                : 'اطلع على القانون التنظيمي المتعلق بالعمالات والأقاليم بالمملكة المغربية.'
        });
    }
}
