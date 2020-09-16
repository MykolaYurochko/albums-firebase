import { Component, OnInit, Inject } from '@angular/core';
import { AlbumsService } from '../albums.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { DeleteBodyComponent } from '../delete-body/delete-body.component';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})

export class AlbumsComponent implements OnInit {
  albums;
  displayedColumns: string[] = ['name', 'band', 'genre', 'label', 'producer', 'control'];

  constructor(
    private albumService: AlbumsService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAlbums().subscribe(res => {
      this.albums = res;
    });
  }

  addItem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";

    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.albumService.createAlbum(res);
      }
    });
  }

  editItem(data): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data.payload.doc.data();
    dialogConfig.width = "60%";

    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.albumService.editAlbum(data, value);
      }
    });
  }

  deleteItem(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "40%";
    let dialogRef = this.matDialog.open(DeleteBodyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.albumService.deleteAlbum(data);
      }
    });
  }
}