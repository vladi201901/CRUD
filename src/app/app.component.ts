import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrudBasico';
}
