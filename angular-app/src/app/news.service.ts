
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewsItem {
    tag: string;
    tag_ar: string;
    tag_class: string;
    title: string;
    title_ar: string;
    content: string;
    content_ar: string;
    link: string;
    link_text: string;
    link_text_ar: string;
    image?: string;
}

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(private http: HttpClient) { }

    getNews(): Observable<NewsItem[]> {
        return this.http.get<NewsItem[]>(`assets/news.json?t=${new Date().getTime()}`);
    }
}
