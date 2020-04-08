import { Component, OnInit } from '@angular/core';
import { Personas } from '../interfaces/personas.interface';
import { PersonasService } from './../services/personas.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private servicioPersonas: PersonasService) { }

  ngOnInit(): void {
    
    this.obtenerServicio();
  }

  personas:Personas[]=[];

  obtenerServicio(){
    /*this.http.get('https://api-mi-liga.now.sh/api/jugadores')
    .subscribe((personas:Personas[])=>{
      console.log(personas);
      this.personas=personas;
    });*/
    
    this.servicioPersonas.obtenerPersonas().subscribe((personas:Personas[])=>{
      console.log(personas);
      this.personas=personas;
    });


  }

}
