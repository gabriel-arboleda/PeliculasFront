import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/shared/models/pelicula.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  public sufix = 'pelicula';

  private notificarEstado = new EventEmitter<any>();

  constructor(private readonly httpCliente: HttpClient) { }

  get notificarEstadoPelicula(): EventEmitter<any> {
    return this.notificarEstado;
  }

  consultarPelicula(): Observable<Pelicula[]> {
    return this.httpCliente.get<Pelicula[]>(`${environment.endpoint}${this.sufix}`)
  }

  guardarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.httpCliente.post<Pelicula>(`${environment.endpoint}${this.sufix}`, pelicula);
  }

  eliminarPelicula(idPelicula: number): Observable<any> {
    return this.httpCliente.delete(`${environment.endpoint}${this.sufix}/${idPelicula}`);
  }

}
