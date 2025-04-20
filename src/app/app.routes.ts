import { Routes } from '@angular/router';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

export const routes: Routes = [
    {path:'', component:ListComentarioComponent},
    {path:'agregar', component:AgregarEditarComentarioComponent},
    {path:'editar/:id', component:AgregarEditarComentarioComponent},
    {path:'ver/:id', component:VerComentarioComponent},
    {path:'**', redirectTo:'/', pathMatch:'full'}
];
