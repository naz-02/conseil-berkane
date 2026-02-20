
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
    selector: 'app-session-2-extraordinaire-2023',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-2-extraordinaire-2023.component.html',
    styleUrl: './session-2-extraordinaire-2023.component.css'
})
export class Session2Extraordinaire2023Component {
    constructor(public langService: LanguageService) { }
}
