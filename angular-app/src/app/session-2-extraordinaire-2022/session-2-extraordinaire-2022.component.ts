
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
    selector: 'app-session-2-extraordinaire-2022',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-2-extraordinaire-2022.component.html',
    styleUrl: './session-2-extraordinaire-2022.component.css'
})
export class Session2Extraordinaire2022Component {
    constructor(public langService: LanguageService) { }
}
