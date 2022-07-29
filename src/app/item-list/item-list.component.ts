import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList!: Array<{ name: string, price: string, description: string, image: string, hide: boolean }>;
  name!: string;
  price!: number;

  @ViewChild(ItemComponent) item!: ItemComponent;

  @ViewChildren(ItemComponent) itemChildren!: QueryList<ItemComponent>;

  @ViewChildren("text") text!: QueryList<ElementRef>;

  constructor(public httpClient: HttpClient) {
  }

  changeFromParent() {
    // this.data += 1;
    this.itemList.push({
      name: "IPhone 17",
      price: "INR 56,000/-",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      image: "../../assets/images/phone.jpeg",
      hide: false
    })
  }

  ngOnInit(): void {

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    this.httpClient.get('http://httpbin.org/get', { headers }).toPromise().then(data =>

      this.itemList = [
        {
          name: "IPhone 12",
          price: "INR 56,000/-",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          image: "../../assets/images/all_apple_prod.jpg",
          hide: false
        },
        {
          name: "Samsung Galaxy Ultra",
          price: "INR 88,000/-",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          image: "../../assets/images/samsung.jpeg",
          hide: false
        },
        {
          name: "OnePlus 9 Pro",
          price: "INR 59,000/-",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          image: "../../assets/images/oneplus.jpeg",
          hide: true
        }
      ]
    );
  }

  getItem(item: any) {
    // console.log(item)
  }

}
