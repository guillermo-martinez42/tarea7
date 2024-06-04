import { Component, EventEmitter, Input, OnChanges, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.scss'
})
export class ImagenesComponent {

  
  @Input() personaje: string ='';
  public pict = this.personaje;
  imagePath: string ='./img/${pict}.png';

  private loadImage(personaje: string) {
    const img = new Image();
    img.src = `assets/img/${personaje}.png`;

    img.onload = () => {
      this.imagePath = img.src;
    };
  }

  ngOnChanges(changes: SimpleChanges) {
      this.loadImage(changes['personaje'].currentValue);
    
  }


 

}
