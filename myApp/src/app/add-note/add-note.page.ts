import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { LoadingController } from '@ionic/angular';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  ionicForm: FormGroup;
  category : FormArray;
  note: any ;
  id : any;
  name: any; 
  categories : any;
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
    })
    this.getCategories();
  }

  async getCategories() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getCategories()
      .subscribe(res => {
        this.categories = res;
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
    await this.api.postNote(this.note)
      .subscribe(res => {
         this.router.navigate(['/notes']);
      
      }, (err) => {
         console.log(err);
      });
  }

  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, 
      public formBuilder: FormBuilder, public loadingController: LoadingController, private router: Router) { }

}

