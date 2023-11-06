import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, BusquedaComponent, CardListComponent],
  imports: [CommonModule, FormsModule],
  exports: [HomePageComponent],
})
export class GiftsModule {}
