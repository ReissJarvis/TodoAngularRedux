import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TodoComponent } from './todo.component';
import { ToDoRoutingModule } from './todo-routing.module'
import { MaterialModule } from '../shared/material.module'
import { AddTodoDialogComponent } from '../shared/dialogs/add-todo-dialog/add-todo-dialog.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ToDoRoutingModule,
    FormsModule
  ],
  declarations: [TodoComponent, AddTodoDialogComponent],
  entryComponents: [AddTodoDialogComponent],
})
export class TodoModule { }
