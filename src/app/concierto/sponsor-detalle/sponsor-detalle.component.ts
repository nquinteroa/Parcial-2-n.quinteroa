import { Component, OnInit } from '@angular/core';
import { sponsor } from '../sponsor';
import { Input } from '@angular/core';
@Component({
  selector: 'app-sponsor-detalle',
  templateUrl: './sponsor-detalle.component.html',
  styleUrls: ['./sponsor-detalle.component.css']
})
export class SponsorDetalleComponent implements OnInit {
  @Input() sponsorDetail:sponsor;
  constructor() { }

  ngOnInit() {
  }

}
