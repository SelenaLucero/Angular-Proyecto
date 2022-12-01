import { VinotecaContactoComponent } from './vinoteca-contacto/vinoteca-contacto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  VinotecaComponent } from './vinoteca/vinoteca.component';
import { VinotecaQuieneSomosComponent } from './vinoteca-quienes-somos/vinoteca-quienes-somos.component';

// import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'',
    redirectTo: 'vinos',
    pathMatch: 'full'
  },
  {
      path:'vinos',
      component: VinotecaComponent
  },
  {
    path:'contacto',
    component: VinotecaContactoComponent
},
{
  path:'quienesSomos',
  component: VinotecaQuieneSomosComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
