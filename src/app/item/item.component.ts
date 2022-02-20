// item.component.ts

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() itemObj: any;

  @Output() emitItem = new EventEmitter();

  constructor(public router: Router, public sharedService: SharedService) {
  }

  gotoCheckoutPage(obj: any) {

    // Routing via mandatory parameters
    // this.router.navigate(['check-out', obj.name, obj.price]);

    this.sharedService.setLoggedIn(false);
    this.sharedService.setParams({
      modelID: obj.name,
      price: obj.price
    })
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
