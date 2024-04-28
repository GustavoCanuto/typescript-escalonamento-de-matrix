import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  numerator: number = 0;
  denominator: number = 1;

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  confirmFraction(): void {
    const result = this.numerator / this.denominator;
    this.dialogRef.close(result);
    }

}
