import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeniorityLevelService } from './seniority-level.service';
import { SeniorityLevel } from './models/seniority-level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'form-array-tutorial';
  skillsForm!: FormGroup;

  constructor(private fb: FormBuilder, private seniorityLevelService: SeniorityLevelService){
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.skills.push(this.newSkill());
  }

  get skills() : FormArray {
    // retorna o formArray skills dentro do formularaio skillsForm
    return this.skillsForm.get('skills') as FormArray;
  }

  get levels(): SeniorityLevel[]{
    return this.seniorityLevelService.levels;
  }

  // este será o formgroup que sera criado e adicionado ao formArray toda vez que uma nova skill for criada
  newSkill() : FormGroup{
    return this.fb.group({
      skill: this.fb.control('',[Validators.required]),
      exp: this.fb.control('',[Validators.required]),
      seniorLevel: this.fb.control('',[Validators.required])
    })
  }

  // Adiciona ao array de skills uma nova skill, que por sua vez é um formGroup, que só pode ser acessado
  // através de seu índice
  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  formFieldContainsSpecificError(control: AbstractControl, formControlName: string, errorName: string) : boolean {
    if (control.get(formControlName)?.invalid &&
       (control.get(formControlName)?.dirty || control.get(formControlName)?.touched) &&
       (control.get(formControlName)?.errors?.[errorName])) return true;
    return false;
  }

  onSubmit() {
    console.log(this.skillsForm.valid);
    console.log(this.skillsForm.value);
  }
}
