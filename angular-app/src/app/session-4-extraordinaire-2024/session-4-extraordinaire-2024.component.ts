import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
    selector: 'app-session-4-extraordinaire-2024',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-4-extraordinaire-2024.component.html',
    styleUrls: ['./session-4-extraordinaire-2024.component.css']
})
export class Session4Extraordinaire2024Component {
    constructor(public langService: LanguageService) { }
}
