import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-7-extraordinaire-2023',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-7-extraordinaire-2023.component.html',
    styleUrls: ['./session-7-extraordinaire-2023.component.css']
})
export class Session7Extraordinaire2023Component {
    constructor(public langService: LanguageService) { }
}
