import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-ramadan-mubarak',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ramadan-mubarak.component.html',
    styles: [`
        .content-section {
            padding: 40px 20px;
            max-width: 1200px;
            margin: 0 auto;
            background-color: var(--background-color);
            color: var(--text-color);
        }
        .page-header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 60px 20px;
            text-align: center;
            border-radius: 0 0 20px 20px;
            margin-bottom: 40px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .page-header h1 {
            margin: 0;
            font-size: 2.5em;
            font-weight: 700;
        }
        .session-report {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        .session-title {
            color: var(--primary-color);
            margin-bottom: 20px;
            font-size: 1.8em;
            border-bottom: 2px solid var(--secondary-color);
            padding-bottom: 10px;
            display: inline-block;
        }
        p {
            line-height: 1.8;
            font-size: 1.1em;
            margin-bottom: 20px;
        }
    `]
})
export class RamadanMubarakComponent {
    constructor(public langService: LanguageService) { }
}
