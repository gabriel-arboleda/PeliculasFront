import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from 'src/app/shared/models/prestamo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  
  public sufix = 'prestamo';
  
  private notificarEstado = new EventEmitter<any>();

  constructor(private readonly httpCliente: HttpClient) { }

  get notificarEstadoPrestamo(): EventEmitter<any> {
    return this.notificarEstado;
  }

  consultarPrestamoPorCliente( docIdentidad: number): Observable<Prestamo[]> {
    return this.httpCliente.get<Prestamo[]>(`${environment.endpoint}${this.sufix}/${docIdentidad}`)
  }

  guardarPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.httpCliente.post<Prestamo>(`${environment.endpoint}${this.sufix}`, prestamo);
  }

  eliminarPrestamo(idPrestamo: number): Observable<any> {
    return this.httpCliente.delete(`${environment.endpoint}${this.sufix}/${idPrestamo}`);
  }
  
}
