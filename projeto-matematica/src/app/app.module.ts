import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Sistema1Component } from './componentes/sistema1/sistema1.component';
import { Sistema2Component } from './componentes/sistema2/sistema2.component';
import { Sistema3Component } from './componentes/sistema3/sistema3.component';
import { FormsModule } from '@angular/forms';
import { GeradorMatrixComponent } from './gerador-matrix/gerador-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Sistema1Component,
    Sistema2Component,
    Sistema3Component,
    GeradorMatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
