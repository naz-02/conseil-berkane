import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-janvier-2025-ordinaire',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-janvier-2025-ordinaire.component.html',
    styleUrl: './session-janvier-2025-ordinaire.component.css'
})
export class SessionJanvier2025OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
