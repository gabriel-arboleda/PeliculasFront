import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PeliculaService } from 'src/app/core/services/pelicula.service';
import Swal from 'sweetalert2';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculaFormularioComponent } from './pelicula-formulario/pelicula-formulario.component';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  displayedColumns: string[] = ['nombrePelicula', 'genero', 'accion'];
  listaPeliculas: Pelicula[] = [];

  constructor(private readonly peliculaService: PeliculaService, private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.actualizarEstado();
    this.cargarInformacionPelicula();
  }

  cargarInformacionPelicula() {
    this.peliculaService.consultarPelicula().subscribe(peliculas => {
      this.listaPeliculas = peliculas;
    });
  }

  actualizarEstado(): void {
    this.peliculaService.notificarEstadoPelicula.subscribe(() => this.cargarInformacionPelicula());
  }

  editarOCrear(element?: Pelicula): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = element;

    this.dialog.open(PeliculaFormularioComponent, dialogConfig);
  }

  eliminar(element: Pelicula): void {
    if (!element.prestamos || element.prestamos.length === 0) {
      this.peliculaService.eliminarPelicula(element.idPelicula).toPromise().then(() => {
        Swal.fire('Exito', 'se elimino correctamete!', 'success');
        this.peliculaService.notificarEstadoPelicula.emit();
      });
    } else {
      Swal.fire('Error', 'No se puede eliminar la pelicula ya se encuentra prestada', 'error');
    }
  }

}
