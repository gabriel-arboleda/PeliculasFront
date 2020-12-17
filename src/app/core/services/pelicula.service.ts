import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/shared/models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  public url = '/api/pelicula';

  private notificarEstado = new EventEmitter<any>();

  constructor(private readonly httpCliente: HttpClient) { }

  get notificarEstadoPelicula(): EventEmitter<any> {
    return this.notificarEstado;
  }

  consultarPelicula(): Observable<Pelicula[]> {
    return this.httpCliente.get<Pelicula[]>(this.url)
  }

  guardarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.httpCliente.post<Pelicula>(this.url, pelicula);
  }

  eliminarPelicula(idPelicula: number): Observable<any> {
    return this.httpCliente.delete(`${this.url}/${idPelicula}`);
  }

}
