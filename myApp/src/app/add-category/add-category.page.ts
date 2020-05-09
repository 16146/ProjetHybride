import { Component, OnInit, Injectable, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { CategoriesPage } from '../categories/categories.page';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  ionicForm: FormGroup;

  categories: FormArray;

  isSubmitted = false;

  
  createNewTask()
  {
      console.log(this.ionicForm.value)
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // dob: [this.defaultDate],
      // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
    this.getClassrooms();
  }

  classrooms : any;
  category : any;
  async getClassrooms() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getClassroom()
      .subscribe(res => {
        console.log(res);
        this.classrooms = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
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
  createCategory(): FormGroup {
    return this.formBuilder.group({
      student_name: ''
    });
  }
  
  addBlankStudent(): void {
    this.categories = this.ionicForm.get('category') as FormArray;
    this.categories.push(this.createCategory());
  }
  async saveCategory(){
    console.log(this.ionicForm.value);
    await this.api.postClassroom(this.ionicForm.value)
    .subscribe(res => {
        this.router.navigate(['/categories']);
      }, (err) => {
        console.log(err);
      });
  }
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public formBuilder: FormBuilder, public loadingController: LoadingController, private router: Router) {
    console.log(api);

   }

}
