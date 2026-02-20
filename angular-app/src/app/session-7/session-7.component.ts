import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-7',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-7.component.html',
    styleUrls: ['./session-7.component.css']
})
export class Session7Component {
    constructor(public langService: LanguageService) { }
}
