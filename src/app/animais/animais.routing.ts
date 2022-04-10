import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'animais',
    component:ListaAnimaisComponent
  },
];

export const AnimaisRoutes = RouterModule.forChild(routes);
