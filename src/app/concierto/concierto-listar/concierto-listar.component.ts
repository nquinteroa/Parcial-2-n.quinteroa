import { Component, OnInit } from '@angular/core';
import { Concierto } from '../concierto';
import { ConciertoService } from '../concierto.service';
@Component({
  selector: 'app-concierto-listar',
  templateUrl: './concierto-listar.component.html',
  styleUrls: ['./concierto-listar.component.css']
})
export class ConciertoListarComponent implements OnInit {
  conciertos: Array<Concierto>;
  conciertoSeleccionado : Concierto;
  selected =false;
  constructor(private conciertoService: ConciertoService) { }

  ngOnInit() {
    this.getConciertos();
  }
  onSelected(p: Concierto): void {
    this.selected = true;
    this.conciertoSeleccionado = p;
  }
  getConciertos(): void {
    this.conciertoService.getConciertos()
      .subscribe(conciertos => {
        this.conciertos = conciertos;
      });
    }
  }
