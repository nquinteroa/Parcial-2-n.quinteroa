import { Component, OnInit } from '@angular/core';
import { Concierto } from '../concierto';
import { ConciertoService } from '../concierto.service';
import {sponsor} from '../sponsor';
@Component({
  selector: 'app-concierto-listar',
  templateUrl: './concierto-listar.component.html',
  styleUrls: ['./concierto-listar.component.css']
})
export class ConciertoListarComponent implements OnInit {
  conciertos: Array<Concierto>;
  conciertoSeleccionado : Concierto;
  sponsorSeleccionado: sponsor;
  selected =false;
  constructor(private conciertoService: ConciertoService) { }

  ngOnInit() {
    this.getConciertos();
    this.getSponsors();
  }
  onSelected(p: Concierto): void {
    this.selected = true;
    this.conciertoSeleccionado = p;
  }
  getSponsors(): void {
    this.conciertoService.getConciertos()
      .subscribe(conciertos => {
        this.conciertos = conciertos;
      });
    }

    onSelectedSponsor(s: sponsor): void {
      this.selected = true;
      this.sponsorSeleccionado = s;
    }
    getConciertos(): void {
      this.conciertoService.getConciertos()
        .subscribe(conciertos => {
          this.conciertos = conciertos;
        });
      }
  }
