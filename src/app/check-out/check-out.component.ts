import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  modelID!: string;
  price!: string;
  myform!: FormGroup;
  countries: string[] = [
    'India',
    'USA',
    'Germany',
    'Britan'
  ]

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      address: new FormControl(),
      country: new FormControl()
    });

    this.activatedRoute.params.subscribe(params => {
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

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted! " + JSON.stringify(this.myform.value));
    }
    this.myform.reset();
  }
}
