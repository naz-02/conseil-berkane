
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-9',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-9.component.html',
    styleUrls: ['./session-9.component.css']
})
export class Session9Component {
    constructor(public langService: LanguageService) { }
}
