
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-ressources',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ressources.component.html',
    styleUrl: './ressources.component.css'
})
export class RessourcesComponent {
    constructor(public langService: LanguageService) { }
}
