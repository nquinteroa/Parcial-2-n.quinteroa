import {Ticket} from "../concierto/ticket";

export class Concierto {
 id: number;
 band: number;
 image: string;
 date: string;
  general: Ticket
 platino : Ticket;



 constructor(
  id: number,
  band: number,
  image: string,
  date: string,
   general: Ticket,
  platino : Ticket,
 ) {
  this.id= id;
 this.band = band;
 this.image = image;
 this.date = date;
 this.general = general;
 this.platino = platino;
 }
}
