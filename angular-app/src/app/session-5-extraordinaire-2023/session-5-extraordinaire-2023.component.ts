import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-5-extraordinaire-2023',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-5-extraordinaire-2023.component.html',
    styleUrls: ['./session-5-extraordinaire-2023.component.css']
})
export class Session5Extraordinaire2023Component {
    constructor(public langService: LanguageService) { }
}
