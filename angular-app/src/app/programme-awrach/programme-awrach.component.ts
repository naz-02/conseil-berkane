import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { AWRACH_DATA, AwrachWorkshop } from './awrach-data';

@Component({
    selector: 'app-programme-awrach',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './programme-awrach.component.html',
    styleUrls: ['./programme-awrach.component.css']
})
export class ProgrammeAwrachComponent implements OnInit {
    data = AWRACH_DATA;

    constructor(public langService: LanguageService) { }

    ngOnInit(): void {
        // Initial scroll to top
        window.scrollTo(0, 0);
    }

    get workshops(): AwrachWorkshop[] {
        return this.data.workshops;
    }
}
