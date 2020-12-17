import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url = '/api/cliente';

  private notificarEstado = new EventEmitter<any>();

  constructor(private readonly httpCliente: HttpClient) { }

  get notificarEstadoCliente(): EventEmitter<any> {
    return this.notificarEstado;
  }

  consultarClientes(): Observable<Cliente[]> {
    return this.httpCliente.get<Cliente[]>(this.url)
  }

  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpCliente.post<Cliente>(this.url, cliente);
  }

  eliminarCliente(docIdentidad: number): Observable<any> {
    return this.httpCliente.delete(`${this.url}/${docIdentidad}`);
  }

}
