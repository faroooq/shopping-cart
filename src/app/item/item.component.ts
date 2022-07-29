import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() itemObj: any;

  @Output() emitItem = new EventEmitter();

  toggle(item: any) {
    item.hide = !item.hide
  }

  emitData(itemObj: any) {
    this.emitItem.emit(itemObj)
  }

  gotoCheckout(itemObj: any) {
    this.router.navigate(['check-out', itemObj.name, itemObj.price])
  }

  constructor(
    public router: Router
  ) {
    // console.log(`new - item is ${this.itemObj}`);
  }

  // ngOnChanges() {
  //   console.log(`ngOnChanges - item is ${JSON.stringify(this.itemObj)}`);
  // }

  ngOnInit() {
    console.log(`ngOnInit  - item is ${this.itemObj}`);
  }

  // ngDoCheck() {
  //   console.log("ngDoCheck")
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }


}
