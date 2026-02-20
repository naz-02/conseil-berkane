
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SafePipe } from '../safe.pipe'; // Need to create this pipe for iframe src

@Component({
    selector: 'app-loi-organique',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './loi-organique.component.html',
    styleUrl: './loi-organique.component.css'
})
export class LoiOrganiqueComponent {
    constructor(public langService: LanguageService) { }
}
