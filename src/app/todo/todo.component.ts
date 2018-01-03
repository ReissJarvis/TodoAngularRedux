import { Component, OnInit } from '@angular/core';
import { AddTodoDialogComponent } from '../shared/dialogs/add-todo-dialog/add-todo-dialog.component'
import { MatDialog } from '@angular/material'
import { EventService } from '../event.service'
import { QueueNames } from '../event-queues.constants'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: { id: number, message: string, done?: boolean }[]

  constructor(public dialog: MatDialog, private eventService: EventService) { }

  ngOnInit() {
    this.todos = []
  }

  openAddTodo(){
    let dialogRef = this.dialog.open(AddTodoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(!result) {
        return
      }

      this.todos.push({id: this.todos.length + 1, message: result})
      this.eventService.emit(QueueNames.NEW_TODO)
    });
  }

  checkTodo(value) {
    if(value.checked) {
      this.eventService.emit(QueueNames.CHECK_TODO)
    } else {
      this.eventService.emit(QueueNames.UNCHECK_TODO)
    }
    console.log(value)
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.done).length
  }

  deleteTodo(index){
    this.todos.splice(index, 1)
    this.eventService.emit(QueueNames.REMOVE_TODO, this.todos.filter(todo => todo.done).length)
  }
}
