import { Component } from '@angular/core';
import { Agenda } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'uninter-app';
  agenda = Agenda;
}
