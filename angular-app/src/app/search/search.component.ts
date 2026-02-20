import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectsService, Project } from '../projects.service';
import { LanguageService } from '../language.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

interface SearchResult {
    type: 'project' | 'news' | 'session';
    title: string;
    description: string;
    link: string;
    image?: string;
    date?: string;
}

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    query: string = '';
    results: SearchResult[] = [];
    isLoading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService,
        public langService: LanguageService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.query = params['q'] || '';
            if (this.query) {
                this.performSearch(this.query);
            }
        });
    }

    performSearch(query: string) {
        this.isLoading = true;
        this.results = [];
        const lowerQuery = query.toLowerCase();

        // 1. Search Projects
        const projects = this.projectsService.getProjects();
        const projectResults: SearchResult[] = projects
            .filter(p =>
                (p.titleFr && p.titleFr.toLowerCase().includes(lowerQuery)) ||
                (p.titleAr && p.titleAr.includes(query)) ||
                (p.descriptionFr && p.descriptionFr.toLowerCase().includes(lowerQuery)) ||
                (p.descriptionAr && p.descriptionAr.includes(query))
            )
            .map(p => ({
                type: 'project',
                title: this.langService.currentLang() === 'fr' ? p.titleFr : p.titleAr,
                description: this.langService.currentLang() === 'fr' ? p.descriptionFr : p.descriptionAr,
                link: '/projets/' + p.id,
                image: p.imageUrl
            }));

        this.results.push(...projectResults);

        // 2. Search News (from news.json)
        this.http.get<any[]>('assets/news.json').subscribe(news => {
            const newsResults: SearchResult[] = news
                .filter(n =>
                    (n.title && n.title.toLowerCase().includes(lowerQuery)) ||
                    (n.title_ar && n.title_ar.includes(query)) ||
                    (n.content && n.content.toLowerCase().includes(lowerQuery)) ||
                    (n.content_ar && n.content_ar.includes(query))
                )
                .map(n => ({
                    type: 'news',
                    title: this.langService.currentLang() === 'fr' ? n.title : n.title_ar,
                    description: this.langService.currentLang() === 'fr' ? n.content : n.content_ar,
                    link: n.link !== '#' ? '/' + n.link : '#',
                    image: n.image,
                    date: n.date
                }));

            this.results.push(...newsResults);
            this.isLoading = false;
        }, error => {
            console.error('Error loading news for search', error);
            this.isLoading = false;
        });
    }
}
