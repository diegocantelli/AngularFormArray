import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'form-array-tutorial';
  customerInfo!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.customerInfo = this.formBuilder.group({
      firstName: [],
      lastName: [],
      username: [],
      email: [],
      products: this.formBuilder.array([])
    })
  }

  addProduct() {
    let products = this.customerInfo.get('products') as FormArray;
    products.push(this.formBuilder.group({
      name : [],
      description : []
    }));
  }
}
