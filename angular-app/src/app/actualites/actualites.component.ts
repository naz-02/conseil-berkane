import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService, NewsItem } from '../news.service';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-actualites',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './actualites.component.html',
    styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
    newsItems: NewsItem[] = [];

    constructor(
        public newsService: NewsService,
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Actualités | Conseil Provincial de Berkane'
            : 'آخر الأخبار | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Retrouvez toutes les actualités et annonces récentes de la province de Berkane.'
                : 'آخر الأخبار والإعلانات الخاصة بإقليم بركان.'
        });

        this.newsService.getNews().subscribe(data => {
            this.newsItems = data;
        });
    }
}
