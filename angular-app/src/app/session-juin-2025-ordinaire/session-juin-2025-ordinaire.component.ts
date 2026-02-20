import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-juin-2025-ordinaire',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-juin-2025-ordinaire.component.html',
    styleUrl: './session-juin-2025-ordinaire.component.css'
})
export class SessionJuin2025OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
