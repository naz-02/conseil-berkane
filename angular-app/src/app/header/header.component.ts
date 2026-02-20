import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isMenuOpen = false;
    openSubmenuIndex: number | null = null;
    newsItems: any[] = [];

    constructor(public langService: LanguageService, private router: Router, private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any[]>('assets/news.json').subscribe(data => {
            this.newsItems = data;
        });
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.openSubmenuIndex = null;
    }

    toggleSubmenu(index: number, event: Event) {
        if (window.innerWidth <= 900) {
            event.preventDefault();
            this.openSubmenuIndex = this.openSubmenuIndex === index ? null : index;
        }
    }

    setLang(lang: 'fr' | 'ar', event: Event) {
        event.preventDefault();
        this.langService.setLanguage(lang);
    }

    onSearch(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.value.trim() !== '') {
            this.router.navigate(['/search'], { queryParams: { q: input.value } });
        }
    }
}
