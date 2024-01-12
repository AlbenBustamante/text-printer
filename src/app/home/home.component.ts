import { Component } from '@angular/core';
import { TextFormComponent } from './text-form/text-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TextFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
