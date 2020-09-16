import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from './albums.service';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums-component/albums.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component'
import { DeleteBodyComponent } from './delete-body/delete-body.component'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AlbumsComponent,
    DialogBodyComponent,
    DeleteBodyComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule
  ],
  providers: [AlbumsService],
  entryComponents: [
    DialogBodyComponent,
    DeleteBodyComponent
  ]
})
export class AlbumsModule { }
