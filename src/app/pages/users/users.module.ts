import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users-component/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { DialogBodyComponent } from './dialog-body/dialog-body.component'
import { DeleteBodyComponent } from './delete-body/delete-body.component'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [
    UsersComponent,
    DialogBodyComponent,
    DeleteBodyComponent
  ],
  providers: [UsersService],
})

export class UsersModule { }
