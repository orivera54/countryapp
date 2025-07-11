import { Component, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';


@Component({
  selector: 'app-root',
  imports: [LayoutComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('country-dashboard');
}
