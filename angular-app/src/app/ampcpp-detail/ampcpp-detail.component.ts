import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-ampcpp-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ampcpp-detail.component.html',
  styleUrl: './ampcpp-detail.component.css'
})
export class AmpcppDetailComponent {
  constructor(public langService: LanguageService) { }
}
