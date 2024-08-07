import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){

    tag = tag.toLowerCase();

    // Esta linea me permite validar si el tag ya existe en el arreglo _tagsHistory
    if ( this._tagsHistory.includes(tag)){
      //Esta linea me permite realizar un filtro de todos los elementos de _tagsHistory, exceptuando el tag validado
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    //Esta linea me permite insertar el tag al principio
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);

  }

  searchTag( tag: string): void {
    //Esta funcion permite agregar el tag que recibio la funcion al final del arreglo privado _tagsHistory]
    if (tag.length === 0 ) return;
    this.organizeHistory(tag);

  }

}
