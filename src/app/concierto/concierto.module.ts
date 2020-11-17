import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciertoListarComponent } from './concierto-listar/concierto-listar.component';
import { ConciertoDetalleComponent } from "./concierto-detalle/concierto-detalle.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConciertoListarComponent, ConciertoDetalleComponent],
  exports: [ConciertoListarComponent],
})
export class ConciertoModule {}



