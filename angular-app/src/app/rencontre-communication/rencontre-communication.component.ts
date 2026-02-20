
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-rencontre-communication',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './rencontre-communication.component.html',
    styleUrls: ['./rencontre-communication.component.css']
})
export class RencontreCommunicationComponent {
    constructor(public langService: LanguageService) { }
}
