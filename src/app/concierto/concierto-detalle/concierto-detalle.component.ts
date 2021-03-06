import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Concierto } from '../concierto';

@Component({
  selector: 'app-concierto-detalle',
  templateUrl: './concierto-detalle.component.html',
  styleUrls: ['./concierto-detalle.component.css']
})
export class ConciertoDetalleComponent implements OnInit {
  @Input() conciertoDetail: Concierto;
  constructor() { }

  ngOnInit() {
  }

}
