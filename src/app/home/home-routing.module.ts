import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: HomeComponent,
    children:[
      {
        path:'',
        component:LoginComponent,
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
