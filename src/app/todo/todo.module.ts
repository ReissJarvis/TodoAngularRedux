import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ToDoRoutingModule } from './todo-routing.module'
import { MaterialModule } from '../shared/material.module'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ToDoRoutingModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
