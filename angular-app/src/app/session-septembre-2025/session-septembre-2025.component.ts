import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-septembre-2025',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-septembre-2025.component.html',
    styleUrls: ['./session-septembre-2025.component.css']
})
export class SessionSeptembre2025Component {
    constructor(public langService: LanguageService) { }
}
