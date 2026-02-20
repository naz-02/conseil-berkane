
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
    selector: 'app-session-1-extraordinaire-2023',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-1-extraordinaire-2023.component.html',
    styleUrl: './session-1-extraordinaire-2023.component.css'
})
export class Session1Extraordinaire2023Component {
    constructor(public langService: LanguageService) { }
}
