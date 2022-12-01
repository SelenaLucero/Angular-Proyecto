import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VinoProductosComponent } from './vino-productos/vino-productos.component';

import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { VinotecaContactoComponent } from './vinoteca-contacto/vinoteca-contacto.component';
import { VinotecaComponent } from './vinoteca/vinoteca.component';
import { VinotecaQuieneSomosComponent } from './vinoteca-quienes-somos/vinoteca-quienes-somos.component';
import { InputEnteroComponent } from './input-entero/input-entero.component';


@NgModule({
  declarations: [
    AppComponent,
    VinoProductosComponent,
    CarritoCompraComponent,
    VinotecaContactoComponent,
    VinotecaComponent,
    VinotecaQuieneSomosComponent,
    InputEnteroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
