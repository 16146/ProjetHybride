import { Component, OnInit, Injectable, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { CategoriesPage } from '../categories/categories.page';
import { notEqual } from 'assert';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  ionicForm: FormGroup;
  classrooms : any;
  category : FormArray;
  note: any ;
  id : any;
  name: any; 
  categories : FormArray;

  isSubmitted = false;

  
  createNewTask()
  {
      console.log(this.ionicForm.value)
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.minLength(2)]],
      category:  new FormControl([])

      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // dob: [this.defaultDate],
      // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
    this.getClassrooms();
  }
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
  async saveNote(){
    this.category = this.ionicForm.value.category.split('&&&');
    this.note = {
      "title":this.ionicForm.value["title"],
      "content":this.ionicForm.value["content"],
      "category": { 
        "id" : Number(this.category[0]), 
        "name" : this.category[1],   
      },
    }
    console.log("grr",this.note);
     await this.api.postNote(this.note)
     .subscribe(res => {
         this.router.navigate(['/notes']);
      
       }, (err) => {
         console.log(err);
       });
  }
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, 
  public formBuilder: FormBuilder, public loadingController: LoadingController, 
  private router: Router) {
    console.log(api);

   }

}

