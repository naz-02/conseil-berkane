import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-2-extraordinaire-2024',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-2-extraordinaire-2024.component.html',
    styleUrls: ['./session-2-extraordinaire-2024.component.css']
})
export class Session2Extraordinaire2024Component {
    constructor(public langService: LanguageService) { }
}
