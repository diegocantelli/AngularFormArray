import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'form-array-tutorial';
  skillsForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      name: this.fb.control([]),
      skills: this.fb.array([])
    })
  }

  get skills() : FormArray {
    // retorna o formArray skills dentro do formularaio skillsForm
    return this.skillsForm.get('skills') as FormArray;
  }

  addProduct() {
    // let products = this.customerInfo.get('products') as FormArray;
    // products.push(this.formBuilder.group({
    //   name : [],
    //   description : [],
    //   products: this.formBuilder.
    // }));
  }
}
