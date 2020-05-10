import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
//Inspiré de https://www.positronx.io/ionic-form-validation-tutorial/

export class CategoriesPage implements OnInit {

  categories : any;
  preservedcategories : any;
  isSubmitted = false;

  ngOnInit() {
    this.getCategories();
  }
  
  async getCategories() {
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
  }

  async deleteCategory(id) {
    const loading = await this.loadingController.create({
      message: 'Deleting'
    });
    await loading.present();
    await this.api.deleteCategory(id)
      .subscribe(res => {
        loading.dismiss();
        this.getCategories();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public loadingController: LoadingController) {
    this.getCategories();
   }

  ionViewWillEnter(){
    this.api.getCategories().subscribe(res => this.categories = res);
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
