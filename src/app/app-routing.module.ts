import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info/info.component'

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'todo', loadChildren:'./todo/todo.module#TodoModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
