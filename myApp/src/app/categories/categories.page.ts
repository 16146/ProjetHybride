import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
//Inspiré de https://www.positronx.io/ionic-form-validation-tutorial/

export class CategoriesPage implements OnInit {
  notes : any;
  categories : any;
  preservedcategories : any;
  isSubmitted = false;
  listeUsedCategories:any;
  ngOnInit() {
    this.getCategoriesAndNotes();
  }
  
  async getCategoriesAndNotes() {
    let listeUsedCategories = [];
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getCategories()
      .subscribe(res => {
        console.log(res);
        this.preservedcategories =res;
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
      await this.api.getNotes()
      .subscribe(res => {
        console.log(res);
        this.notes = res;
        loading.dismiss();
        this.notes.forEach(element => {
          listeUsedCategories = listeUsedCategories.concat(element.category.name);
        });
        this.listeUsedCategories = listeUsedCategories ;
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


  async deleteCategory(id) {
    const loading = await this.loadingController.create({
      message: 'Deleting'
    });
    await loading.present();
    await this.api.deleteCategory(id)
      .subscribe(res => {
        loading.dismiss();
        this.getCategoriesAndNotes();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public loadingController: LoadingController) {
    this.getCategoriesAndNotes();
   }

  ionViewWillEnter(){
    this.getCategoriesAndNotes();
  }

  filterList(evt) {
    const val = evt.detail.value;
    this.categories= this.preservedcategories;
    if (val && val.trim() !== '') {
      this.categories = this.categories.filter(term => {
        return term.name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
    if (val.trim()==''){
      this.categories= this.preservedcategories;
    }
  }
}
