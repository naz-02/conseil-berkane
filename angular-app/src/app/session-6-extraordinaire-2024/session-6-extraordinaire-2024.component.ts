import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-6-extraordinaire-2024',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-6-extraordinaire-2024.component.html',
    styleUrl: './session-6-extraordinaire-2024.component.css'
})
export class Session6Extraordinaire2024Component {
    constructor(public langService: LanguageService) { }
}
