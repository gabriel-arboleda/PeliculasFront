import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Observable, Subscription } from 'rxjs';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { Cliente } from 'src/app/shared/models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  displayedColumns: string[] = ['docIdentidad','nombres', 'apellidos', 'accion'];
  listaClientes: Cliente[] = [];

  constructor(private readonly clienteService: ClienteService, private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.actualizarEstado();
    this.cargarInformacionCliente();
  }

  cargarInformacionCliente() {
    this.clienteService.consultarClientes().subscribe(clientes => {
      this.listaClientes = clientes;
    });
  }

  actualizarEstado(): void {
    this.clienteService.notificarEstadoCliente.subscribe(() => this.cargarInformacionCliente());
  }

  editarOCrear(element?: Cliente): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = element;

    this.dialog.open(ClienteFormularioComponent, dialogConfig);
  }

  eliminar(element: Cliente): void {
    if (!element.prestamos || element.prestamos.length === 0) {
      this.clienteService.eliminarCliente(element.docIdentidad).toPromise().then(() => {
        Swal.fire('Exito', 'se elimino correctamete!', 'success');
        this.clienteService.notificarEstadoCliente.emit();
      });
    } else {
      Swal.fire('Error', 'No se puede eliminar el cliente ya que tiene citas creadas', 'error');
    }
  }

}
