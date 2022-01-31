// item.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item: any;

  @Output() emitItem = new EventEmitter();

  constructor() {
  }

  sendDataToParent(item: any) {
    this.emitItem.emit(item);
  }

  printItems() {
    return this.item;
  }
}
