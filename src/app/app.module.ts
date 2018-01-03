import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { AddTodoDialogComponent } from './shared/dialogs/add-todo-dialog/add-todo-dialog.component'
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component'



@NgModule({
  declarations: [
    AppComponent,
    AddTodoDialogComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [AddTodoDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
