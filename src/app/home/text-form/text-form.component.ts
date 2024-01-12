import { Component } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-text-form',
  standalone: true,
  templateUrl: './text-form.component.html',
  styleUrl: './text-form.component.css',
  imports: [NgxPrintModule],
})
export class TextFormComponent {}
