import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { MaterialModule } from '@shared/material.module'
import { AddTodoDialogComponent } from '@shared/dialogs'

import { TodoComponent } from './todo.component'
import { ToDoRoutingModule } from './todo-routing.module'
import { TodoReducer } from './reducers/todo.reducers'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ToDoRoutingModule,
    FormsModule,
    StoreModule.forFeature('todo', TodoReducer)
  ],
  declarations: [TodoComponent, AddTodoDialogComponent],
  entryComponents: [AddTodoDialogComponent],
})
export class TodoModule { }
