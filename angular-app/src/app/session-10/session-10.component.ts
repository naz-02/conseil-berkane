
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
    selector: 'app-session-10',
    standalone: true,
    imports: [CommonModule, SessionLayoutComponent],
    templateUrl: './session-10.component.html',
    styleUrls: ['./session-10.component.css']
})
export class Session10Component {
    constructor(public langService: LanguageService) { }
}
