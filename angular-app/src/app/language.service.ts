
import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<'fr' | 'ar'>('fr');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') as 'fr' | 'ar';
      if (savedLang) {
        this.currentLang.set(savedLang);
      }
      this.updateDir();
    }
    
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('language', this.currentLang());
        this.updateDir();
      }
    });
  }

  setLanguage(lang: 'fr' | 'ar') {
    this.currentLang.set(lang);
  }

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'fr' ? 'ar' : 'fr');
  }

  private updateDir() {
    document.body.setAttribute('dir', this.currentLang() === 'ar' ? 'rtl' : 'ltr');
  }
}
