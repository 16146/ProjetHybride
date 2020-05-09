import { Component, OnInit, Injectable, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  categories: FormArray;

  isSubmitted = false;

  
  ngOnInit() {
    this.getNotes();
  }

  notes : any;
  category : any;
  async getNotes() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getNotes()
      .subscribe(res => {
        console.log(res);
        this.notes = res;
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
    await this.api.deleteNote(id)
      .subscribe(res => {
        loading.dismiss();
        this.getNotes();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public loadingController: LoadingController) {
    console.log(api);
    this.getNotes();
   }
   ionViewWillEnter(){
    this.api.getNotes().subscribe(res => this.notes = res);
    }

}
