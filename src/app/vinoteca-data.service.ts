import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Vino } from './vino-productos/vino';
import { Observable } from 'rxjs';

const URL = 'https://63864f5fbeaa64582679d553.mockapi.io/api/productos';


@Injectable({
  providedIn: 'root'
})
export class VinotecaDataService {

  constructor(private http: HttpClient) { }
//consume la api 
  public ObtengoTodo(): Observable <Vino[]>{
    return this.http.get<Vino[]>(URL)
      .pipe(
        tap((vinos : Vino[])=> vinos.forEach(vino => vino.cantidad = 0))
     
      );
    }
    
}

