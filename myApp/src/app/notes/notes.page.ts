import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  isSubmitted = false;

  ngOnInit() {
    this.getNotes();
  }

  notes : any;
  preservednotes : any;

  async getNotes() {
    const loading = await this.loadingController.create({
      message: 'Chargement en cours...'
    });
    await loading.present();
    await this.api.getNotes()
      .subscribe(res => {
        this.preservednotes = res;
        this.notes = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async deleteNote(id) {
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
  
  filterList(evt) {
    const val = evt.detail.value;
    this.notes= this.preservednotes;
    if (val && val.trim() !== '') {
      this.notes = this.notes.filter(term => {
        return term.title.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
    if (val.trim()==''){
      this.notes= this.preservednotes;
    }
  }
}
