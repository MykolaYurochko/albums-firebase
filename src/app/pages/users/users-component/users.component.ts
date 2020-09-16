import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { DeleteBodyComponent } from '../delete-body/delete-body.component';
import { IUser } from '../IUser';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  users: IUser[];
  displayedColumns: string[] = ['name', 'email', 'phone', 'website', 'control'];

  constructor(
    private usersService: UsersService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  addItem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";

    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.usersService.addUser(res).subscribe(val => {
          this.users = [...this.users, ...[val]];
        });
      }
    });
  }

  editItem(data): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    dialogConfig.width = "60%";

    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.usersService.editUser(data.id, value).subscribe(val => { });
      }
    });
  }

  deleteItem(user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "40%";

    let dialogRef = this.matDialog.open(DeleteBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.usersService.deleteUser(user.id).subscribe(val => {
          this.users = this.users.filter(item => item.id !== user.id);
        });
      }
    });
  }
}
