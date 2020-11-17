export class sponsor {
  id: number;
  name: string;
  sponsorship: string;
  image:string;
  correo:string;
  web:string;


  constructor(
    id: number,
    name: string,
    sponsorship: string,
    image:string,
    correo:string,
    web:string,
  ) {
   this.id= id;
   this.name=name;
   this.sponsorship=sponsorship;
   this.image=image;
   this.correo=correo;
   this.web=web;

  }
 }
