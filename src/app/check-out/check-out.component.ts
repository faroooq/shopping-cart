import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  modelID!: string;
  price!: string;

  countries: string[] = [
    'India',
    'USA',
    'Germany',
    'Britan'
  ];
  myform!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  address!: FormControl;
  country!: FormControl;

  constructor(
    public activatedRoute: ActivatedRoute,
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {

    this.createFormControls();
    this.createForm();

    this.sharedService.dataChangeObserver.subscribe((data) => {
      console.log(data)
    })

    this.sharedService.paramsChangeObserver.subscribe((data) => {
      console.log('New User: ' + JSON.stringify(data))
    })

    this.activatedRoute.params.subscribe(params => {
      this.modelID = params.modelID;
      this.price = params.price;
      console.log('Existing User: ' + JSON.stringify(params))
    })
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.address = new FormControl('', Validators.required);
    this.country = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      address: this.address,
      country: this.country
    });
  }

  submit() {
    if (this.myform.valid) {
      console.log("Form Submitted! " + JSON.stringify(this.myform.value));
    }
    this.myform.reset();
  }
}
