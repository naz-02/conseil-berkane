import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-4-extraordinaire',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-4-extraordinaire.component.html',
    styleUrl: './session-4-extraordinaire.component.css'
})
export class Session4ExtraordinaireComponent {
    constructor(public langService: LanguageService) { }
}
