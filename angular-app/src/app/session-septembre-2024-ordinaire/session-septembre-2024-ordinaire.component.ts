import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-septembre-2024-ordinaire',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-septembre-2024-ordinaire.component.html',
    styleUrl: './session-septembre-2024-ordinaire.component.css'
})
export class SessionSeptembre2024OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
