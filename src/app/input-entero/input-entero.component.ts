import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Vino } from '../vino-productos/vino';

@Component({
  selector: 'app-input-entero',
  templateUrl: './input-entero.component.html',
  styleUrls: ['./input-entero.component.scss']
})
export class InputEnteroComponent implements OnInit{
 

  constructor(){ }

  @Input() 
  cantidad!: number; 

  @Input()
   max!: number;

  @Output() 
  cantidadChange: EventEmitter<number> = new EventEmitter<number>(); 
  
  

  ngOnInit():void{

  }

  Mascantidad() : void {
    if(this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad); 
    }
  
    
  }
  Menoscantidad() : void {
    if(this.cantidad > 0) {
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
    }
  }
    changeCantidad(event:any) : void{
      console.log(event.key);
      this.cantidadChange.emit(this.cantidad);
    }
   
}
