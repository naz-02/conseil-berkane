import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-6',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-6.component.html',
    styleUrls: ['./session-6.component.css']
})
export class Session6Component {
    constructor(public langService: LanguageService) { }
}
