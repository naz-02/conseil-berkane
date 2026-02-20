import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    slug?: string; // For canonical URL construction if different from router url
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private domain = 'https://www.cpberkane.com';

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private router: Router,
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    init() {
        // Automatically set canonical URL on navigation end
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.setCanonicalUrl();
        });
    }

    setTitle(title: string) {
        this.titleService.setTitle(title);
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ property: 'twitter:title', content: title });
    }

    setMetaTags(config: SeoConfig) {
        if (config.title) {
            this.setTitle(config.title);
        }
        if (config.description) {
            this.metaService.updateTag({ name: 'description', content: config.description });
            this.metaService.updateTag({ property: 'og:description', content: config.description });
            this.metaService.updateTag({ property: 'twitter:description', content: config.description });
        }
        if (config.keywords) {
            this.metaService.updateTag({ name: 'keywords', content: config.keywords });
        }
        if (config.image) {
            const imageUrl = config.image.startsWith('http') ? config.image : `${this.domain}/${config.image}`;
            this.metaService.updateTag({ property: 'og:image', content: imageUrl });
            this.metaService.updateTag({ property: 'twitter:image', content: imageUrl });
        }

        // Always call setCanonicalUrl to ensure it's up to date or manually overridden
        this.setCanonicalUrl(config.slug);
    }

    setCanonicalUrl(slug?: string) {
        // Only execute on browser to avoid DOM issues during potential SSR (though this app seems client-side mainly)
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        try {
            let url = this.domain + this.router.url;
            if (slug) {
                url = slug.startsWith('http') ? slug : `${this.domain}/${slug}`;
            }

            // Remove query params for canonical if needed, or keep them if they change content.
            // Usually, self-referencing canonicals should include the path.
            // Ensuring no double slashes (except protocol)
            url = url.replace(/([^:]\/)\/+/g, '$1');

            let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = this.document.createElement('link');
                link.setAttribute('rel', 'canonical');
                this.document.head.appendChild(link);
            }
            link.setAttribute('href', url);
        } catch (e) {
            console.error('Error setting canonical URL', e);
        }
    }
}
