// item.component.ts

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() itemObj: any;

  @Output() emitItem = new EventEmitter();

  constructor(public router: Router) {
  }

  gotoCheckoutPage(obj: any) {

    // Routing via mandatory parameters
    // this.router.navigate(['check-out', 'samsung', '10']);

    // Routing via optional parameters
    this.router.navigate(['check-out',
      {
        modelID: obj.name,
        price: obj.price
      }
    ]);
  }

  addItem(item: any) {
    this.emitItem.emit(item);
  }

  ngOnChanges() {
    // console.log('I got intimated..')
  }

  printItems() {
    return this.itemObj;
  }
}
