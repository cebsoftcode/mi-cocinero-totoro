import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Recetario } from './components/recetario/recetario';
import { Categorias } from './components/categorias/categorias';
import { Peliculas } from './components/peliculas/peliculas';

export const routes: Routes = [
    { path: '', component: Home},
    // { path: 'contacto', component: ContactoComponent },
    { path: 'recetario/:receta', component: Recetario},
    { path: 'categorias/:categoria', component: Categorias},
    { path: 'peliculas/:pelicula', component: Peliculas},
    { path: '**', redirectTo: '' }
];
