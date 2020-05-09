import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
//Inspiré de https://www.positronx.io/ionic-form-validation-tutorial/

export class CategoriesPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) { }
  
  createNewTask()
  {
      console.log(this.ionicForm.value)
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(2)]],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // dob: [this.defaultDate],
      // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }

}
