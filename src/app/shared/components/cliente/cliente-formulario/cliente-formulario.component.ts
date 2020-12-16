import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent implements OnInit {

  cliente: Cliente;
  clienteFormulario: FormGroup;

  constructor(private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<ClienteFormularioComponent>,
    private readonly clienteService: ClienteService,
    @Inject(MAT_DIALOG_DATA) data: Cliente) { 
      this.cliente = data;
      this.clienteFormulario = this.fb.group({
        docIdentidad: ['', Validators.required],
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario(): void {
    if (this.cliente) {
      this.clienteFormulario.patchValue(this.cliente);
    }
  }

  guardarCliente(cliente: Cliente): void {
    this.clienteService.guardarCliente(cliente).subscribe(() => {
      Swal.fire('Exito', 'Se guardo la informacion con exito', 'success');
      this.clienteService.notificarEstadoCliente.emit();
    }, (error) => {
      Swal.fire('Error', `Se genero un error guardando la información de ${cliente.nombres}`, 'error');
    });
  }

  save(): void {
    const clienteForm: Cliente = this.clienteFormulario.getRawValue();
    this.guardarCliente(clienteForm);
    this.dialogRef.close(clienteForm);
  }

  close(): void {
    this.dialogRef.close();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.clienteFormulario.controls[controlName].hasError(errorName);
  }

}
