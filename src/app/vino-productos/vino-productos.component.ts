import { Component } from '@angular/core';
import { VinotecaCarritoService } from '../vinoteca-carrito.service';
import { VinotecaDataService } from '../vinoteca-data.service';
import { Vino } from './vino';




@Component({
  selector: 'app-vino-productos',
  templateUrl: './vino-productos.component.html',
  styleUrls: ['./vino-productos.component.scss'],
})
export class VinoProductosComponent {


  vinos: Vino[] = [];

  constructor(
    private carrito: VinotecaCarritoService,
    private VinotecaDataService: VinotecaDataService) {
    }

  ngOnInit(): void {
    this.VinotecaDataService.ObtengoTodo()
    .subscribe(vinos => this.vinos = vinos);
  }

  agregarCompra(vino: Vino) : void {
    this.carrito.agregarCompra(vino);
    vino.stock -= vino.cantidad;
    vino.cantidad = 0;
  }
  
  
}
