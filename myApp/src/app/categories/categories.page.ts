import { Component, OnInit, Injectable, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
//Inspiré de https://www.positronx.io/ionic-form-validation-tutorial/

export class CategoriesPage implements OnInit {


  categories: FormArray;

  isSubmitted = false;

  
  ngOnInit() {
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
  async delete(id) {
    const loading = await this.loadingController.create({
      message: 'Deleting'
    });
    await loading.present();
    await this.api.deleteClassroom(id)
      .subscribe(res => {
        loading.dismiss();
        this.getClassrooms();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public loadingController: LoadingController) {
    console.log(api);
    this.getClassrooms();
   }
   ionViewWillEnter(){
    this.api.getClassroom().subscribe(res => this.classrooms = res);
    }

}
