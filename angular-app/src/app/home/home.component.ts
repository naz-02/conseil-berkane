
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
import { NewsService, NewsItem } from '../news.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    newsItems: NewsItem[] = [];
    slideIndex = 1;
    slideInterval: any;

    constructor(public langService: LanguageService, private newsService: NewsService) { }

    ngOnInit() {
        this.newsService.getNews().subscribe(data => {
            this.newsItems = data;
        });

        // Auto slide? The original script just called showSlides(slideIndex) once, 
        // it didn't seem to have an interval in the provided snippet, 
        // but typically slideshows auto-play. The snippet had `showSlides(slideIndex)` called on load.
        // I will stick to manual control + initial show unless specifically asked for autoplay, 
        // to match "pixel perfect" logic of provided script.
    }

    ngOnDestroy() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }

    plusSlides(n: number) {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n: number) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n: number) {
        // Updated for 4 slides
        if (n > 4) { this.slideIndex = 1; }
        else if (n < 1) { this.slideIndex = 4; }
        else { this.slideIndex = n; }
    }
}
