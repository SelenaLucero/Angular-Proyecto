import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vino } from '../vino-productos/vino';
import { VinotecaCarritoService } from '../vinoteca-carrito.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss'],
})
export class CarritoCompraComponent implements OnInit {
  ListadoCompra$: Observable<Vino[]>;
 
  

  constructor(private carrito: VinotecaCarritoService) {
    this.ListadoCompra$ = carrito.ListadoCompra.asObservable();
  }
  ngOnInit(): void {}

  
}
