import { Component, OnInit } from '@angular/core';
import { Personas } from '../interfaces/personas.interface';
import * as PERSONAS from '../../assets/data/p.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.personas=(PERSONAS as any).data;

    console.log(this.personas);
  }

  personas:Personas[];

}
