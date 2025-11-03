import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface DialogData {
  title: string;
  message: string;
  icon?: string;
  color?: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule], 
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  fechar() {
    this.dialogRef.close();
  }
}
