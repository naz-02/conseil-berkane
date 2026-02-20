import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-7-extraordinaire-2024',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-7-extraordinaire-2024.component.html',
    styleUrl: './session-7-extraordinaire-2024.component.css'
})
export class Session7Extraordinaire2024Component {
    constructor(public langService: LanguageService) { }
}
