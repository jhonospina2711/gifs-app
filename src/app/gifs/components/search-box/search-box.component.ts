import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gifs.services';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `
})

export class SearchBoxCompoenent {
  // Sirve para obtener la referencia local del txtTagInput utilizdo como identificador en la plantilla de arriba para la entrada en el input
  @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifService: GifService ) { }

  searchTag() {

    const newTag = this.tagInput.nativeElement.value;

    this.gifService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';


  }
}
