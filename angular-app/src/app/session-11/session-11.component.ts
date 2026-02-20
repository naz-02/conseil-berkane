
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
    selector: 'app-session-11',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-11.component.html',
    styleUrl: './session-11.component.css',
    encapsulation: ViewEncapsulation.None // To allow styles to apply to inner HTML if needed
})
export class Session11Component {
    constructor(public langService: LanguageService) { }
}
