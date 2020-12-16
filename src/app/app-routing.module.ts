import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormularioComponent } from './shared/components/cliente/cliente-formulario/cliente-formulario.component';
import { ClienteComponent } from './shared/components/cliente/cliente.component';
import { PeliculaFormularioComponent } from './shared/components/pelicula/pelicula-formulario/pelicula-formulario.component';
import { PeliculaComponent } from './shared/components/pelicula/pelicula.component';
import { PrestamoFormularioComponent } from './shared/components/prestamo/prestamo-formulario/prestamo-formulario.component';
import { PrestamoComponent } from './shared/components/prestamo/prestamo.component';

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
