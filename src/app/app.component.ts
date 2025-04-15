import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, ListComentarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrudBasico';
}
