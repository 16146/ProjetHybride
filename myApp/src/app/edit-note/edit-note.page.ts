import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { LoadingController } from '@ionic/angular';
import { FormControl,  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {
  ionicForm: FormGroup;
  category : any;
  categories : any;
  note : any;
  isSubmitted = false;
  

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.minLength(2)]],
      category:  new FormControl('', Validators.required),
    })
    this.getNote(this.route.snapshot.paramMap.get('id'));
    this.getCategories();
  }


  async getNote(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getNoteById(id).subscribe(res => {
      this.ionicForm.controls["title"].setValue(res.title);
      this.ionicForm.controls["content"].setValue(res.content);
      this.ionicForm.controls["category"].setValue(String(res.category.id)+"&&&"+String(res.category.name));
      this.note = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
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
  
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public formBuilder: FormBuilder, public loadingController: LoadingController,
          private route: ActivatedRoute, private router: Router) {}
}
