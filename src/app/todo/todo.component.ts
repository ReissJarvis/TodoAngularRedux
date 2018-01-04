import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'
import { Store } from '@ngrx/store'

import { Todo } from '@shared/models'
import { AddTodoDialogComponent } from '@shared/dialogs'

import * as TodoActions from './reducers/todo.actions'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = []

  constructor(public dialog: MatDialog, private store: Store<{todo:any[]}>) { }

  ngOnInit() {
    this.store.select(state => state.todo)
      .subscribe(todos => {
        this.todos = todos
      })
  }

  openAddTodo() {
    let dialogRef = this.dialog.open(AddTodoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(!result) {
        return
      }

      this.store.dispatch(new TodoActions.NewTodo(result))
    });
  }

  checkTodo(value, id) {
    if(value.checked) {
      this.store.dispatch(new TodoActions.CheckTodo(id))
    } else {
      this.store.dispatch(new TodoActions.UncheckTodo(id))
    }
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.done).length
  }

  deleteTodo(id) {
    this.store.dispatch(new TodoActions.RemoveTodo(id))
  }
}
