import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormularioComponent } from './feature/components/cliente/cliente-formulario/cliente-formulario.component';
import { ClienteComponent } from './feature/components/cliente/cliente.component';
import { PeliculaFormularioComponent } from './feature/components/pelicula/pelicula-formulario/pelicula-formulario.component';
import { PeliculaComponent } from './feature/components/pelicula/pelicula.component';
import { PrestamoFormularioComponent } from './feature/components/prestamo/prestamo-formulario/prestamo-formulario.component';
import { PrestamoComponent } from './feature/components/prestamo/prestamo.component';
const routes: Routes = [
  {
      path: 'prestamos',
      component: PrestamoComponent,
      data: { title: 'prestamos' }
  },
  {
    path: 'prestamos/formulario-prestamo',
    component: PrestamoFormularioComponent,
    data: { title: 'Formulario Prestamo' }
},
  {
      path: 'clientes',
      component: ClienteComponent,
      data: { title: 'Clientes' }
  },
  {
      path: 'clientes/formulario-cliente',
      component: ClienteFormularioComponent,
      data: { title: 'Formulario Cliente' }
  },
  {
    path: 'peliculas',
    component: PeliculaComponent,
    data: { title: 'Peliculas' }
},
{
    path: 'peliculas/formulario-peliculas',
    component: PeliculaFormularioComponent,
    data: { title: 'Formulario peliculas' }
},
  { path: '**', redirectTo: 'prestamos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
