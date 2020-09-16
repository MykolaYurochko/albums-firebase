import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html'
})

export class DialogBodyComponent {
  form: FormGroup;

  name: string;
  band: string;
  genre: string[];
  label: string[];
  producer: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.name = data ? data.name : '';
    this.band = data ? data.band : '';
    this.genre = data ? data.genre : [];
    this.label = data ? data.label : [];
    this.producer = data ? data.producer : [];

    this.form = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      band: new FormControl(this.band, Validators.required),
      genre: new FormControl(this.genre),
      label: new FormControl(this.label),
      producer: new FormControl(this.producer)
    })
  }

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  removable = true;


  addChip(event: MatChipInputEvent, arr: string[]): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      arr.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeChip(genre: string, arr: string[]): void {
    const index = arr.indexOf(genre);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  }
}