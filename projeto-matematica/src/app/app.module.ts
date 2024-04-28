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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Sistema1Component,
    Sistema2Component,
    Sistema3Component,
    GeradorMatrixComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
