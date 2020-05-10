import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {

  ngOnInit() {
    this.getNote(this.route.snapshot.paramMap.get('id'));
  }

  note : any = {};

  async getNote(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
     await loading.present();
     await this.api.getNoteById(id).subscribe(res => {
      this.note = {
        "id": res.id,
        "title": res.title,
        "content":res.content,
        "category":res.category.name,
        "date": res.date,
      }
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public loadingController: LoadingController,private route: ActivatedRoute, private router: Router) {
    this.getNote(this.route.snapshot.paramMap.get('id'));
  }
}
