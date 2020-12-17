import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from 'src/app/shared/models/prestamo.model';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  
  public url = '/api/prestamo';
  
  private notificarEstado = new EventEmitter<any>();

  constructor(private readonly httpCliente: HttpClient) { }

  get notificarEstadoPrestamo(): EventEmitter<any> {
    return this.notificarEstado;
  }

  consultarPrestamoPorCliente( docIdentidad: number): Observable<Prestamo[]> {
    return this.httpCliente.get<Prestamo[]>(`${this.url}/${docIdentidad}`)
  }

  guardarPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.httpCliente.post<Prestamo>(this.url, prestamo);
  }

  eliminarPrestamo(idPrestamo: number): Observable<any> {
    return this.httpCliente.delete(`${this.url}/${idPrestamo}`);
  }
  
}
