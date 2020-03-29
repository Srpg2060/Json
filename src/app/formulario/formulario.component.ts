import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  Nombre= new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }
  onNombre(){
    console.log(this.Nombre.value);
    this.Nombre.setValue("Perfecto chen!!!");
  }

}
