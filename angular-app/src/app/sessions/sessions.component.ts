import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'app-sessions',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sessions.component.html',
    styleUrl: './sessions.component.css'
})
export class SessionsComponent {
    year: string = '2025';

    constructor(public langService: LanguageService, private route: ActivatedRoute) {
        this.route.url.subscribe(url => {
            console.log('SessionsComponent URL:', url);
            const path = url[0]?.path;
            if (path) {
                console.log('Path:', path);
                if (path.includes('sessions-')) {
                    const extracted = path.replace('sessions-', '').replace('.html', '');
                    console.log('Extracted year candidate:', extracted);
                    if (!isNaN(Number(extracted))) {
                        this.year = extracted;
                        console.log('Year set to:', this.year);
                    }
                } else if (path.includes('20')) {
                    // Fallback for other patterns if any
                    const parts = path.split('-');
                    if (parts.length > 1) {
                        const part = parts[1].replace('.html', '');
                        if (!isNaN(Number(part))) {
                            this.year = part;
                        }
                    }
                }
            }
        });
    }
}
