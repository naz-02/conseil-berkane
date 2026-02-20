import { Component, Inject, PLATFORM_ID, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';
import { LanguageService } from './language.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'angular-app';

    constructor(
        private meta: Meta,
        private titleService: Title,
        public languageService: LanguageService,
        private seoService: SeoService,
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.seoService.init();

        effect(() => {
            const lang = this.languageService.currentLang();

            // Update HTML lang attribute
            if (isPlatformBrowser(this.platformId)) {
                this.document.documentElement.lang = lang;
            }

            if (lang === 'fr') {
                this.titleService.setTitle('Conseil Provincial de Berkane');
                this.meta.updateTag({ name: 'description', content: 'Site officiel du Conseil Provincial de Berkane. Retrouvez toutes les actualités, sessions, projets et services aux citoyens de la province de Berkane.' });
                this.meta.updateTag({ name: 'keywords', content: 'Berkane, Conseil Provincial, Maroc, Oriental, Développement, Citoyen, Services' });
                this.meta.updateTag({ property: 'og:title', content: 'Conseil Provincial de Berkane' });
                this.meta.updateTag({ property: 'og:description', content: 'Site officiel du Conseil Provincial de Berkane. Actualités, projets et services.' });
            } else {
                this.titleService.setTitle('المجلس الإقليمي لبركان');
                this.meta.updateTag({ name: 'description', content: 'الموقع الرسمي للمجلس الإقليمي لبركان. تجدون هنا آخر الأخبار، الدورات، المشاريع والخدمات المقدمة للمواطنين بإقليم بركان.' });
                this.meta.updateTag({ name: 'keywords', content: 'بركان, المجلس الإقليمي, المغرب, الشرق, تنمية, مواطن, خدمات' });
                this.meta.updateTag({ property: 'og:title', content: 'المجلس الإقليمي لبركان' });
                this.meta.updateTag({ property: 'og:description', content: 'الموقع الرسمي للمجلس الإقليمي لبركان. أخبار، مشاريع وخدمات.' });
            }
        });
    }
}
