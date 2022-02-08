// item-list.component.ts

import { Component, ContentChild, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  cartItems: Array<Object> = [];
  itemList: { name: string; price: string; description: string; image: string; }[] = [];

  constructor(router: Router, public activatedRoute: ActivatedRoute) { }

  @ViewChild(ItemComponent) itemViewChild!: ItemComponent;
  @ViewChild("header") tempRef!: ElementRef;
  @ViewChildren(ItemComponent) viewAllItems!: QueryList<ItemComponent>;

  @ContentChild(ItemComponent) itemContentChild!: ItemComponent;

  @ContentChild(ItemComponent) itemContentChildren!: QueryList<ItemComponent>;

  ngAfterViewInit() {
    // console.log(`ngAfterViewInit - itemViewChild is ${this.itemViewChild}`);
  }

  ngAfterContentInit() {
    // console.log(`ngAfterContentInit - itemContentChild is ${this.itemContentChild}`);
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      // console.log(url[0].path)
      if (url[0].path === 'mobiles') {
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
      } else if (url[0].path === 'tablets') {
        this.itemList = [
          {
            name: "Ipad",
            price: "INR 88,000/-",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            image: "../../assets/images/ipad.jpeg"
          },
          {
            name: "Samsung Tab",
            price: "INR 68,000/-",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            image: "../../assets/images/samsung-tab.jpeg"
          }
        ]
      }
    })
  }

  getCartItem(item: any) {
    this.cartItems.push(item);
    // console.log(JSON.stringify(this.cartItems.length))
  }
}
