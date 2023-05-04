import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Infos } from 'src/app/infos';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
})
export class PaginationButtonComponent {
  @Input()
  infos!: Infos;

  @Output()
  notifyNextPage = new EventEmitter<string>();

  @Output()
  notifyPrevPage = new EventEmitter<string>();

  handleNextPage(event: string) {
    this.notifyNextPage.emit(event);
  }

  handlePrevPage(event: string) {
    this.notifyPrevPage.emit(event);
  }
}
