import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-ampcpp-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ampcpp-detail.component.html',
  styles: []
})
export class AmpcppDetailComponent implements OnInit {
  constructor(
    public langService: LanguageService,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    const title = this.langService.currentLang() === 'fr'
      ? 'Détails AMPCPP | Conseil Provincial de Berkane'
      : 'تفاصيل جمعية AMPCPP | المجلس الإقليمي لبركان';

    this.seoService.setMetaTags({
      title: title,
      description: this.langService.currentLang() === 'fr'
        ? 'Informations sur l\'Association Marocaine des Présidents des Conseils des Préfectures et des Provinces (AMPCPP).'
        : 'معلومات حول الجمعية المغربية لرؤساء مجالس العمالات والأقاليم (AMPCPP).'
    });
  }
}
