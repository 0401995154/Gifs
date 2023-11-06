import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifts/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  get vista() {
    return this.gifService.tagHistoryAcceder;
  }

  mostrarData(tag: string) {
    this.gifService.buscarTag(tag);
  }
}
