import { Component } from '@angular/core';
import { GifService } from '../../../gifs/services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // Private
  //HTML Tenga una propiedad publica
  constructor(private gifService: GifService) {}

  get tags() {
    return this.gifService.tagsHistory;
  }

}
