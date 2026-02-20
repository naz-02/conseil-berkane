import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-janvier-2024-ordinaire',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-janvier-2024-ordinaire.component.html',
    styleUrls: ['./session-janvier-2024-ordinaire.component.css']
})
export class SessionJanvier2024OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
