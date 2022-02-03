// item-list.component.ts

import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  itemList: Array<Object> = [];
  cartItems: Array<Object> = [];

  constructor(router: Router) { }

  @ViewChild(ItemComponent) viewItem!: ItemComponent;

  // @ViewChild("header") tempRef!: ElementRef;

  @ViewChildren(ItemComponent) viewAllItems!: QueryList<ItemComponent>;

  ngOnInit() {
    this.itemList = [
      {
        name: "IPhone",
        price: "INR 56,000/-",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/phone.jpeg"
      },
      {
        name: "Samsung",
        price: "INR 88,000/-",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/samsung.jpeg"
      },
      {
        name: "OnePlus",
        price: "INR 59,000/-",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/oneplus.jpeg"
      }
    ]
  }

  ngAfterViewInit() {
    // this.tempRef.nativeElement.textContent = "Best Available Models";
  }

  getItem(item: any) {
    this.cartItems.push(item);
    // console.log(JSON.stringify(this.cartItems.length))
  }
}
