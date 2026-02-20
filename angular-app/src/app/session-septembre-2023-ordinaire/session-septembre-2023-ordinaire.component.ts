import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-septembre-2023-ordinaire',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-septembre-2023-ordinaire.component.html',
    styleUrls: ['./session-septembre-2023-ordinaire.component.css']
})
export class SessionSeptembre2023OrdinaireComponent {
    constructor(public langService: LanguageService) { }
}
