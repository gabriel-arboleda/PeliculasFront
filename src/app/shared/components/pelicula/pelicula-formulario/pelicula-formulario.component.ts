import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeliculaService } from 'src/app/core/services/pelicula.service';
import { Pelicula } from 'src/app/shared/models/pelicula.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula-formulario',
  templateUrl: './pelicula-formulario.component.html',
  styleUrls: ['./pelicula-formulario.component.css']
})
export class PeliculaFormularioComponent implements OnInit {

  pelicula: Pelicula;
  peliculaFormulario: FormGroup;

  constructor(private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<PeliculaFormularioComponent>,
    private readonly peliculaService: PeliculaService,
    @Inject(MAT_DIALOG_DATA) data: Pelicula) { 
      this.pelicula = data;
      this.peliculaFormulario = this.fb.group({
        nombrePelicula: ['', Validators.required],
        genero: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario():void{
    if (this.pelicula) {
      this.peliculaFormulario.patchValue(this.pelicula);
    }
  }

  guardarPelicula(pelicula: Pelicula): void {
    this.peliculaService.guardarPelicula(pelicula).subscribe(() => {
      Swal.fire('Exito', 'Se actualizo la informacion con exito', 'success');
      this.peliculaService.notificarEstadoPelicula.emit();
    }, (error) => {
      Swal.fire('Error', `Se genero un error guardando la información de ${pelicula.nombrePelicula}`, 'error');
    });
  }

  save(): void {
    const peliculaForm: Pelicula = this.peliculaFormulario.getRawValue();
    this.guardarPelicula(peliculaForm);
    this.dialogRef.close(peliculaForm);
  }

  close(): void {
    this.dialogRef.close();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.peliculaFormulario.controls[controlName].hasError(errorName);
  }

}
