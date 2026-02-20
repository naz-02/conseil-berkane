
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
    selector: 'app-session-juin-2023-ordinaire',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-juin-2023-ordinaire.component.html',
    styleUrl: './session-juin-2023-ordinaire.component.css'
})
export class SessionJuin2023OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
