import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/Comentario';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-comentario',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-comentario.component.html',
  styleUrl: './list-comentario.component.css'
})
export class ListComentarioComponent {
  listComentarios : Comentario[] = [
    {titulo: "Angular", creador:"Vladimir Paz", fechaCreacion: new Date(), texto: "Framework de Google"},
    {titulo: "React js", creador:"Veronica Chayan", fechaCreacion: new Date(), texto: "Libreria de Facebook"},
    {titulo: "Vue JS", creador:"Loky Paz Chayan", fechaCreacion: new Date(), texto: "Libreria de quien sera"}
  ];
}
