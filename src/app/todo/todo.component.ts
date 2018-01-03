import { Component, OnInit } from '@angular/core';
import { AddTodoDialogComponent } from '../shared/dialogs/add-todo-dialog/add-todo-dialog.component'
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: { id: number, message: string }[]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.todos = []
  }

  openAddTodo(){
    let dialogRef = this.dialog.open(AddTodoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.todos.push({id: this.todos.length + 1 ,message: result})
    });
  }

  deleteTodo(index){
    this.todos.splice(index, 1)
  }
}
