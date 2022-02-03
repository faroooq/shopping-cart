import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  modelID!: string;
  price!: string;
  constructor(public activatedRoute: ActivatedRouteSnapshot) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: { modelID: string; price: string; }) => {
      // if (params.modelID === 'IPhone') {
      this.modelID = params.modelID;
      this.price = params.price;
      //   console.log('make a IPhone api call to get all the iphone related info')
      // } else if (params.modelID === 'Samsung') {
      // this.modelID = params.modelID;
      // this.price = params.price;
      //   console.log('make a Samsung api call to get all the samsung related info')
      // }
    }
    )
  }
}
