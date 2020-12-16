import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public sufix = 'cliente';

  private notificarEstado = new EventEmitter<any>();

  constructor(private readonly httpCliente: HttpClient) { }

  get notificarEstadoCliente(): EventEmitter<any> {
    return this.notificarEstado;
  }

  consultarClientes(): Observable<Cliente[]> {
    return this.httpCliente.get<Cliente[]>(`${environment.endpoint}${this.sufix}`)
  }

  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpCliente.post<Cliente>(`${environment.endpoint}${this.sufix}`, cliente);
  }

  eliminarCliente(docIdentidad: number): Observable<any> {
    return this.httpCliente.delete(`${environment.endpoint}${this.sufix}/${docIdentidad}`);
  }

}
