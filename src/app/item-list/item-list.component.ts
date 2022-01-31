// item-list.component.ts

import { Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AppComponent } from '../app.component';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  cartItems: Array<Object> = [];

  @ViewChild(ItemComponent) itemView!: ItemComponent;

  @ViewChildren(ItemComponent) itemChildren!: QueryList<ItemComponent>;

  @ViewChild("header") headerEl!: ElementRef;

  itemList: { name: string; price: string; description: string; image: string; }[] = [];

  constructor() { }

  ngAfterViewInit() {

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);

    this.headerEl.nativeElement.textContent = "Best Available Models";

    // @ViewChild - We get only one item.
    console.log('**** ' + this.itemView.printItems())

    // @ViewChildren - We get all items using the class QueryList
    let item: ItemComponent[] = this.itemChildren.toArray();
    for (let i = 0; i < item.length; i++) {
      console.log(item[i].printItems());
    }
  }

  ngOnInit() {
    this.itemList = [
      {
        name: "IPhone 12",
        price: "INR 56,000/-",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/phone.jpeg"
      },
      {
        name: "Samsung Galaxy S21 Ultra",
        price: "INR 88,000/-",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/samsung.jpeg"
      },
      {
        name: "OnePlus 9 Pro",
        price: "INR 59,000/-",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/oneplus.jpeg"
      }
    ]
  }

  addItem(item: any) {
    this.cartItems.push(item);
    console.log(JSON.stringify(this.cartItems))
  }
}
