import { Routes } from '@angular/router';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';

export const routes: Routes = [
    {path:'', component:ListComentarioComponent},
    {path:'agregar', component:AgregarEditarComentarioComponent}
];
