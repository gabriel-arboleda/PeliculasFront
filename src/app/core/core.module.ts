import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from "./services/cliente.service";
import { PeliculaService } from "./services/pelicula.service";
import { PrestamoService } from "./services/prestamo.service";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
      ClienteService,
      PeliculaService,
      PrestamoService
    ]
  })
  export class CoreModule {}