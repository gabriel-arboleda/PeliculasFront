import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import Swal from 'sweetalert2';
import { Prestamo } from '../../models/prestamo.model';
import { PrestamoFormularioComponent } from './prestamo-formulario/prestamo-formulario.component';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  displayedColumns: string[] = ['nombrePelicula', 'genero', 'accion'];
  listaPrestamos: Prestamo[] = [];
  busqueda: FormGroup;

  constructor(private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
    private readonly prestamoService: PrestamoService) {
      this.busqueda = this.fb.group({
        docIdentidad: ['']
      });
    }

  ngOnInit(): void {
    this.actualizarEstado();
  }

  actualizarEstado(): void {
    this.prestamoService.notificarEstadoPrestamo.subscribe(() => this.buscarPrestamos());
  }

  buscarPrestamos(): void{
    const docIdentidad = this.busqueda.get('docIdentidad')?.value
    if (docIdentidad) {
      this.prestamoService.consultarPrestamoPorCliente(docIdentidad).subscribe(prestamos =>{
        this.listaPrestamos = prestamos;
      });
    }
  }

  crearPrestamo(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.busqueda.get('docIdentidad')?.value

    this.dialog.open(PrestamoFormularioComponent, dialogConfig);
  }

  eliminar(element: Prestamo): void {
    this.prestamoService.eliminarPrestamo(element.idPrestamo).toPromise().then(() => {
      Swal.fire('Exito', 'se elimino correctamete!', 'success');
      this.prestamoService.notificarEstadoPrestamo.emit();
    });
  }

}
