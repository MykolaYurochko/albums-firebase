import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-delete-body',
  templateUrl: './delete-body.component.html'
})

export class DeleteBodyComponent {
  constructor(public dialogRef: MatDialogRef<DeleteBodyComponent>) { }
}
