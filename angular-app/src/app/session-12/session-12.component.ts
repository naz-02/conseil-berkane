import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { SessionLayoutComponent } from '../shared/session-layout/session-layout.component';

@Component({
  selector: 'app-session-12',
  standalone: true,
  imports: [CommonModule, SessionLayoutComponent],
  templateUrl: './session-12.component.html',
  styleUrl: './session-12.component.css'
})
export class Session12Component {
  constructor(public langService: LanguageService) { }
}
