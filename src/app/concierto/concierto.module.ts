import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciertoListarComponent } from './concierto-listar/concierto-listar.component';
import { ConciertoDetalleComponent } from "./concierto-detalle/concierto-detalle.component";
import {SponsorDetalleComponent} from "./sponsor-detalle/sponsor-detalle.component"

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConciertoListarComponent, ConciertoDetalleComponent,SponsorDetalleComponent],
  exports: [ConciertoListarComponent],
})
export class ConciertoModule {}



