import { AnimaisComponent } from './animais.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ListaAnimaisComponent,
    AnimaisComponent,
  ],
  exports:[
    ListaAnimaisComponent,
    AnimaisComponent,
  ]
})
export class AnimaisModule { }
