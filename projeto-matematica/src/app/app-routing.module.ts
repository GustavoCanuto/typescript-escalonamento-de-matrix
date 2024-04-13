import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sistema1Component } from './componentes/sistema1/sistema1.component';
import { Sistema2Component } from './componentes/sistema2/sistema2.component';

const routes: Routes = [
  {
    path: '',
    component: Sistema1Component,
    pathMatch: 'full'
  },
  {
    path: 'sistema1',
    component: Sistema1Component
  },
  {
    path: 'sistema2',
    component: Sistema2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
