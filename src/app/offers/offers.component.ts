// offers.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  cartItems: Array<Object> = [];

  offersList: { name: string; discount: string, description: string; image: string; }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.offersList = [
      {
        name: "All Apple Products",
        discount: "Upto 60% Discount",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/all_apple_prod.jpg"
      },
      {
        name: "All Samsung Products",
        discount: "Upto 30% Discount",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/all_sumsung_prod.jpg"
      },
      {
        name: "All OnePlus Products",
        discount: "Upto 80% Discount",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        image: "../../assets/images/all_oneplus_prod.png"
      }
    ]
  }
}
