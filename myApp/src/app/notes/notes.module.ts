import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NotesPage } from './notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NotesPageRoutingModule
  ],
  declarations: [NotesPage]
})
export class NotesPageModule {}
