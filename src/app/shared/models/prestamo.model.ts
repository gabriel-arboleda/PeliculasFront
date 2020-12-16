import { Cliente } from "./cliente.model";
import { Pelicula } from "./pelicula.model";

export interface Prestamo {
    idPrestamo: number;
    fechaPrestamo?: Date;
    fechaDevolucion: Date;
    valorPrestamo?: number;
    cliente: Cliente;
    pelicula: Pelicula;
}