import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'
import { AddTodoDialogComponent } from './shared/dialogs/add-todo-dialog/add-todo-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'To-do List';
  todos: { id: number, message: string }[] = []

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openAddTodo(){
    let dialogRef = this.dialog.open(AddTodoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.todos.push({id: this.todos.length + 1 ,message: result})
    });
  }

}
