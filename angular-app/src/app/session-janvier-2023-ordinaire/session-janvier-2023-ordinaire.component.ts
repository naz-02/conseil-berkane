
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
    selector: 'app-session-janvier-2023-ordinaire',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-janvier-2023-ordinaire.component.html',
    styleUrl: './session-janvier-2023-ordinaire.component.css'
})
export class SessionJanvier2023OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
