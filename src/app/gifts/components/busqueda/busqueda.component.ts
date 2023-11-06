import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  @ViewChild('busca')
  ingresa!: ElementRef<HTMLInputElement>;

  constructor(private gifServices: GifsService) {}

  entrada() {
    const dato = this.ingresa.nativeElement.value;
    this.gifServices.buscarTag(dato);
    this.ingresa.nativeElement.value = '';
  }
}
