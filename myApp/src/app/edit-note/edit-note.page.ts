import { Component, OnInit, Injectable, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { CategoriesPage } from '../categories/categories.page';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {
  ionicForm: FormGroup;

  categories: FormArray;
  category : FormArray;
  isSubmitted = false;

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.minLength(2)]],
      category:  new FormControl([])

      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // dob: [this.defaultDate],
      // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
    this.getNote(this.route.snapshot.paramMap.get('id'));
    this.getClassrooms();
  }

  classrooms : any;
  note : any;
  async getNote(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getNoteById(id).subscribe(res => {
      this.ionicForm.controls["title"].setValue(res.title);
      this.ionicForm.controls["content"].setValue(res.content);
      this.ionicForm.controls["category"].setValue(res.category);
      console.log(this.ionicForm);
      this.note = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
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
  createCategory(): FormGroup {
    return this.formBuilder.group({
      student_name: ''
    });
  }
  
  async updateNote(){
    this.category = this.ionicForm.value.category.split('&&&');
    this.note = {
      "title":this.ionicForm.value["title"],
      "content":this.ionicForm.value["content"],
      "category": { 
        "id" : Number(this.category[0]), 
        "name" : this.category[1],   
      },
    }
    console.log(this.note);
    await this.api.updateNote(this.route.snapshot.paramMap.get('id'), this.note)
    .subscribe(res => {
      this.router.navigate(['/notes']);
      }, (err) => {
        console.log(err);
      });
  }
  
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public formBuilder: FormBuilder, public loadingController: LoadingController,private route: ActivatedRoute, private router: Router) {
    console.log(api);
   }

}
