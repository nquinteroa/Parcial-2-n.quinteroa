import {Ticket} from "../concierto/ticket";
import{sponsor} from "../concierto/sponsor";

export class Concierto {
 id: number;
 band: number;
 image: string;
 date: string;
  general: Ticket;
 platino : Ticket;
 sponsors:sponsor[];



 constructor(
  id: number,
  band: number,
  image: string,
  date: string,
   general: Ticket,
  platino : Ticket,
  sponsors:sponsor[],
 ) {
  this.id= id;
 this.band = band;
 this.image = image;
 this.date = date;
 this.general = general;
 this.platino = platino;
 this.sponsors= sponsors;
 }
}
