import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-confirmation-modal',
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {

  constructor(
    public dialogRef:MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{message:string}
  ){}

  ngOnInit(){
    console.log(this.data);
  }

  closeDialog(value:boolean) {
    this.dialogRef.close(value);
  }


}
