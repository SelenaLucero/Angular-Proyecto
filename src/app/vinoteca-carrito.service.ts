import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vino } from './vino-productos/vino';



@Injectable({
  providedIn: 'root',
})

// maneja la logica del carrito
export class VinotecaCarritoService {

  private _ListadoCompra:Vino[] =[]; 
  
  ListadoCompra: BehaviorSubject<Vino[]> = new BehaviorSubject(this._ListadoCompra);

 
  constructor() {}


  agregarCompra(vino: Vino) {
    let item: Vino | undefined = this._ListadoCompra.find((v1) => v1.marca == vino.marca); //buscamos si dentro de la lista hay algun vino con la misma marca
    if (!item) {
      // sino existe
      this._ListadoCompra.push({ ... vino}); // lo agregamos // copia el objeto
    }else{
      item.cantidad += vino.cantidad;
    }
    this.ListadoCompra.next(this._ListadoCompra); // notifica un cambio en la nueva variable // equivalente al emmit del evento
  }
}
