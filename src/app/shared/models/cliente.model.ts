import { Prestamo } from "./prestamo.model";

export interface Cliente {
    docIdentidad: number;
    nombres: string;
    apellidos: string;
    prestamos?: Prestamo[];
}