import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-coupe-arabe-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './coupe-arabe-detail.component.html',
    styleUrls: ['./coupe-arabe-detail.component.css']
})
export class CoupeArabeDetailComponent {
    constructor(public langService: LanguageService) { }
}
