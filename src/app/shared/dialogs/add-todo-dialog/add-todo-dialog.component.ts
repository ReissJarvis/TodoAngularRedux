import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-add-todo-dialog',
  template: `
    <div mat-dialog-title>
    Add To-do
    </div>
    <div mat-dialog-content>
     <mat-form-field>
        <input matInput [(ngModel)]="message" placeholder="message"/>
     </mat-form-field>
    </div>
    <div mat-dialog-actions>
        <button mat-raised-button (click)="cancel()">Cancel</button>
        <button mat-raised-button [disabled]="!message" [mat-dialog-close]="message" >Add</button>
    </div>
    
  `,
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent implements OnInit {

  message = ''
  constructor(public dialogRef: MatDialogRef<AddTodoDialogComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close()
  }
}
