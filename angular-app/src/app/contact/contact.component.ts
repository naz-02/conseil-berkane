
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
    name = '';
    email = '';
    subject = '';
    message = '';

    constructor(
        public langService: LanguageService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        const title = this.langService.currentLang() === 'fr'
            ? 'Contact | Conseil Provincial de Berkane'
            : 'اتصل بنا | المجلس الإقليمي لبركان';

        this.seoService.setMetaTags({
            title: title,
            description: this.langService.currentLang() === 'fr'
                ? 'Contactez le Conseil Provincial de Berkane pour toute question ou demande d\'information.'
                : 'اتصل بالمجلس الإقليمي لبركان لأي استفسار أو طلب معلومات.'
        });
    }

    onSubmit(event: Event) {
        event.preventDefault();
        const mailtoLink = `mailto:contact@cpberkane.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(`Nom: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`)}`;
        window.location.href = mailtoLink;
    }
}
