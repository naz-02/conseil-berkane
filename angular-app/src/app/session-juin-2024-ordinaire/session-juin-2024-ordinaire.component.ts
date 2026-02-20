import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-juin-2024-ordinaire',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-juin-2024-ordinaire.component.html',
    styleUrl: './session-juin-2024-ordinaire.component.css'
})
export class SessionJuin2024OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
