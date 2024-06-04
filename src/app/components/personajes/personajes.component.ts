import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ImagenesComponent } from '../../imagenes/imagenes.component';
import { Perosnajes } from '../../models/imagenes.model';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [ReactiveFormsModule, ImagenesComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {

  public personaje = new FormControl();


  
/**@Output() show = new EventEmitter<string>() 



  mostrar(equipo: string) {
    console.log(`Data = ${equipo}`);
    this.show.emit(equipo);
    console.log(this.peronaje.value);
  }**/

  mostrar(data:string ){
    console.log(this.personaje.value);
    this.personaje = this.personaje;
    const img = new Image();
    img.src = `assets/img/${data}.png`;
  }


}
