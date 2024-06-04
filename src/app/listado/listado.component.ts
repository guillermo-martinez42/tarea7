import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Temperatura } from '../models/temperatura.model';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {


  @Input() temperaturas: Array<Temperatura>=[];
  @Output() borrarProducto = new EventEmitter<Temperatura>() 



  borrar(temperatura: Temperatura) {
    console.log(`Data = ${temperatura.far}`);
    this.borrarProducto.emit(temperatura);
  }

}
