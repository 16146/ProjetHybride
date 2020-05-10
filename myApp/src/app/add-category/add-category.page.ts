import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})

export class AddCategoryPage implements OnInit {
  ionicForm: FormGroup;
  categories : any;
  isSubmitted = false;

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^((?!&&&).)*$')]],
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

  async saveCategory(){
    console.log(this.ionicForm.value);
    await this.api.postCategory(this.ionicForm.value)
    .subscribe(res => {
        this.router.navigate(['/categories']);
      }, (err) => {
        console.log(err);
      });
  }

  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService,
      public formBuilder: FormBuilder, public loadingController: LoadingController, private router: Router) { }

}
