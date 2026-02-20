
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    name = '';
    email = '';
    subject = '';
    message = '';

    constructor(public langService: LanguageService) { }

    onSubmit(event: Event) {
        event.preventDefault();
        const mailtoLink = `mailto:contact@cpberkane.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(`Nom: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`)}`;
        window.location.href = mailtoLink;
    }
}
