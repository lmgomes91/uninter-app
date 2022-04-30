import { Component } from '@angular/core';
import { Agenda } from './arquivo';

//componentes padrão inicializados pela CLI
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // titulo dado
  title = 'uninter-app';
  /**
   * export da agenda, que foram carregados
   * a partir do arquivo.ts e assim
   * tendo visibilidade no html
   */
  agenda = Agenda;
}
