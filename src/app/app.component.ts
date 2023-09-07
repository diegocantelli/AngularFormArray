import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private seniorityLevelService: SeniorityLevelService){}

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([])
    })
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
      skill: this.fb.control([]),
      exp: this.fb.control([]),
      seniorLevel: this.fb.control([])
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

  onSubmit() {
    console.log(this.skillsForm.value);
  }
}
