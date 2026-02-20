import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService, NewsItem } from '../news.service';
import { LanguageService } from '../language.service';

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
        public langService: LanguageService
    ) { }

    ngOnInit(): void {
        this.newsService.getNews().subscribe(data => {
            this.newsItems = data;
        });
    }
}
