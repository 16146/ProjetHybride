import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})

export class EditCategoryPage implements OnInit {
  ionicForm : FormGroup;
  category : any;
  isSubmitted = false;

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    })
    this.getCategoryById(this.route.snapshot.paramMap.get('id'));
  }

  async getCategoryById(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getCategoryById(id).subscribe(res => {
      this.ionicForm.controls['name'].setValue(res.name);
      this.category = res;
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
  
  async updateCategory(){
    await this.api.updateCategory(this.route.snapshot.paramMap.get('id'), this.ionicForm.value)
    .subscribe(res => {
      this.router.navigate(['/categories']);
      }, (err) => {
        console.log(err);
      });
  }
  
  constructor(@Inject(forwardRef(() => RestApiService)) public api: RestApiService, public formBuilder: FormBuilder, 
          public loadingController: LoadingController,private route: ActivatedRoute, private router: Router) { }

}
