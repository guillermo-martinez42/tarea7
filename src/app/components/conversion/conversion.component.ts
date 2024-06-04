import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Temperatura } from '../../models/temperatura.model';
import { ListadoComponent } from '../../listado/listado.component';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [ReactiveFormsModule, ListadoComponent],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss'
})
export class ConversionComponent  {

  public temperatura = new FormControl();
  public grados = new FormControl();
  public temperaturaC = 0.0;
  public temperaturaF = 0.0;
  public temperaturas:Temperatura[] =[];
  
  grabarTemp(){
    console.log(`temperatura es:  ${this.temperatura.value}`)
    console.log(`en:  ${this.grados.value}`)
    
    if (this.grados.value === 'celsius'){
      this.temperaturaC = parseFloat(this.temperatura.value.toFixed(2));
      this.temperaturaF = ((this.temperaturaC * (9/5)) + 32);
      this.temperaturaF = parseFloat(this.temperaturaF.toFixed(2));
    } else {
      this.temperaturaF = parseFloat(this.temperatura.value.toFixed(2));
      this.temperaturaC = (this.temperaturaF - 32) * 5/9;
      this.temperaturaC = parseFloat(this.temperaturaC.toFixed(2)); 
    }
    console.log(this.temperaturaF, this.temperaturaC );

    this.temperaturas.push(new Temperatura(this.temperaturaC,this.temperaturaF))

  }

  borrarProducto(data: Temperatura) {
    console.log(`Temperatura es ${this.temperatura.value} y el input es ${this.grados.value}`);
    this.temperaturas = this.temperaturas.filter(x => x.celcios != data.celcios );
  }

  

}
