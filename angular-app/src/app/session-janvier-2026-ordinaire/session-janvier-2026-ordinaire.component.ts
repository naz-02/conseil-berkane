import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-janvier-2026-ordinaire',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-janvier-2026-ordinaire.component.html',
    styleUrl: './session-janvier-2026-ordinaire.component.css'
})
export class SessionJanvier2026OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
