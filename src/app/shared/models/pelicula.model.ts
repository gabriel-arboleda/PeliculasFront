import { Prestamo } from "./prestamo.model";

export interface Pelicula {
    idPelicula: number;
    nombrePelicula: string;
    genero: string;
    prestamos?: Prestamo[];
}