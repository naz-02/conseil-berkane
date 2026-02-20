import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-session-layout',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-header">
        <h1 *ngIf="langService.currentLang() === 'fr'">{{ titleFr }}</h1>
        <h1 *ngIf="langService.currentLang() === 'ar'">{{ titleAr }}</h1>
    </div>

    <section class="content-section">
        <img [src]="imageUrl" [alt]="imageAlt"
            style="width:100%; max-width:800px; margin: 0 auto 30px; display: block; border-radius: 8px;">

        <!-- Content Projection -->
        <ng-content></ng-content>
    </section>
  `,
    // Shared styles can go here or be imported. 
    // Using inline styles for simplicity as per existing pattern or minimal css.
    styles: [`
    .page-header {
      background-color: var(--couleur-primaire);
      color: white;
      padding: 40px 5%;
      text-align: center;
      margin-bottom: 40px;
    }
    .content-section {
      padding: 0 5% 60px;
      max-width: 1200px;
      margin: 0 auto;
    }
  `],
    encapsulation: ViewEncapsulation.None
})
export class SessionLayoutComponent {
    @Input() titleFr: string = '';
    @Input() titleAr: string = '';
    @Input() imageUrl: string = '';
    @Input() imageAlt: string = '';

    constructor(public langService: LanguageService) { }
}
