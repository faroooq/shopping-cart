// item.component.ts

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() itemObj: any;

  @Output() emitItem = new EventEmitter();

  constructor() {
  }

  addItem(item: any) {
    this.emitItem.emit(item);
  }

  ngOnChanges() {
    console.log('I got intimated..')
  }

  printItems() {
    return this.itemObj;
  }
}
