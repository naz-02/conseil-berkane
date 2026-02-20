import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-8-extraordinaire-2024',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-8-extraordinaire-2024.component.html',
    styleUrl: './session-8-extraordinaire-2024.component.css'
})
export class Session8Extraordinaire2024Component {
    constructor(public langService: LanguageService) { }
}
