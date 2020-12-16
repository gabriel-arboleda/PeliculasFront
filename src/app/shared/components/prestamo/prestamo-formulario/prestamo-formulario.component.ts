import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { PeliculaService } from 'src/app/core/services/pelicula.service';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { Pelicula } from 'src/app/shared/models/pelicula.model';
import { Prestamo } from 'src/app/shared/models/prestamo.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamo-formulario',
  templateUrl: './prestamo-formulario.component.html',
  styleUrls: ['./prestamo-formulario.component.css']
})
export class PrestamoFormularioComponent implements OnInit {

  listaClientes: Cliente[] = [];
  listaPeliculas: Pelicula[] = [];

  prestamoFormulario: FormGroup;

  docIdentidad: number;


  constructor(private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<PrestamoFormularioComponent>,
    private readonly clienteService: ClienteService,
    private readonly peliculaService: PeliculaService,
    private readonly prestamoService: PrestamoService,
    @Inject(MAT_DIALOG_DATA) data: number) { 
      this.docIdentidad = data;
      this.prestamoFormulario = this.fb.group({
        fechaDevolucion: ['', Validators.required],
        cliente: ['', Validators.required],
        pelicula: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.cargarListas();
  }

  cargarListas(): void {
    this.clienteService.consultarClientes().subscribe(clientes => {
      this.listaClientes = clientes;
    });
    this.peliculaService.consultarPelicula().subscribe(peliculas => {
      this.listaPeliculas = peliculas;
    });
  }

  clienteSeleccionado(clienteSeleccionado: Cliente, o1: Cliente): boolean {
    console.log(clienteSeleccionado,"ele");
    console.log(o1,"o1");

    return o1.docIdentidad === clienteSeleccionado.docIdentidad;
  }

  peliculaSeleccionada(peliculaSeleccionada: Pelicula, o1: Pelicula): boolean {
    return o1.idPelicula === peliculaSeleccionada.idPelicula;
  }

  transformarDate(fechaIngreso: any): any {
    return new Date(fechaIngreso).toLocaleString('es-ES');
  }

  guargarPrestamo(prestamo: Prestamo){
    this.prestamoService.guardarPrestamo(prestamo).subscribe(()=> {
      Swal.fire('Exito', 'Se guardo la informacion con exito', 'success');
      this.prestamoService.notificarEstadoPrestamo.emit();
    }, (error) => {
      Swal.fire('Error', `Se genero un error guardando la información del prestamo`, 'error');
    });
  }

  save(): void{
    const prestamoForm = this.prestamoFormulario.getRawValue();
    this.guargarPrestamo(prestamoForm);
    this.dialogRef.close(prestamoForm);
  }

  close(): void {
    this.dialogRef.close();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.prestamoFormulario.controls[controlName].hasError(errorName);
  }

}
