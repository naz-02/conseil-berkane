import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-session-8',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './session-8.component.html',
    styleUrls: ['./session-8.component.css']
})
export class Session8Component {
    constructor(public langService: LanguageService) { }
}
