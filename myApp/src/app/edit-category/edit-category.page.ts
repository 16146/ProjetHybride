import { Component, OnInit, Injectable, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { CategoriesPage } from '../categories/categories.page';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit {
  ionicForm: FormGroup;

  categories: FormArray;

  isSubmitted = false;

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // dob: [this.defaultDate],
      // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
    this.getClassroom(this.route.snapshot.paramMap.get('id'));
  }

  classrooms : any;
  category : any;
  async getClassroom(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getClassroomById(id).subscribe(res => {
      this.ionicForm.controls['name'].setValue(res.name);
      console.log(this.ionicForm);
      this.category = res;
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
  
  async updateCategory(){
    await this.api.updateClassroom(this.route.snapshot.paramMap.get('id'), this.ionicForm.value)
    .subscribe(res => {
      this.router.navigate(['/categories']);
      }, (err) => {
        console.log(err);
      });
  }
  
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public formBuilder: FormBuilder, public loadingController: LoadingController,private route: ActivatedRoute, private router: Router) {
    console.log(api);
   }

}
