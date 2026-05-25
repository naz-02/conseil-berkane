import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { findSession, SessionData } from './sessions-data';

@Component({
    selector: 'app-session-detail',
    standalone: true,
    imports: [CommonModule, SafeHtmlPipe],
    templateUrl: './session-detail.component.html',
    styleUrl: './session-detail.component.css'
})
export class SessionDetailComponent implements OnInit {
    session: SessionData | undefined;

    constructor(
        private router: Router,
        public langService: LanguageService,
        private seoService: SeoService
    ) {
        // Re-run SEO whenever the language changes
        effect(() => {
            const lang = this.langService.currentLang();
            if (this.session) {
                this.seoService.setMetaTags({
                    title:       lang === 'fr' ? this.session.seo.titleFr       : this.session.seo.titleAr,
                    description: lang === 'fr' ? this.session.seo.descriptionFr : this.session.seo.descriptionAr,
                    keywords:    lang === 'fr' ? this.session.seo.keywordsFr    : this.session.seo.keywordsAr,
                    image: this.session.image
                });
            }
        });
    }

    ngOnInit(): void {
        // Derive slug from the current URL (strip leading slash and .html suffix)
        const rawPath = this.router.url.split('?')[0].split('#')[0];
        const slug    = rawPath.replace(/^\//, '').replace(/\.html$/, '');
        this.session  = findSession(slug);
    }
}
