import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html'
})

export class DialogBodyComponent {
  form: FormGroup;
  name: string;
  email: string;
  phone: string[];
  website: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name = data ? data.name : '';
    this.email = data ? data.email : '';
    this.phone = data ? data.phone : '';
    this.website = data ? data.website : '';

    this.form = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      email: new FormControl(this.email, Validators.required),
      phone: new FormControl(this.phone, Validators.required),
      website: new FormControl(this.website, Validators.required),
    })
  }
}
