import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from '@shared/models/store.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  totalNumberOfTodos = 0

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store
      .select(state => state.todo)
      .subscribe(todos => {
          if(todos) {
            this.totalNumberOfTodos = todos.filter(todo => !todo.done).length
          }
      })
  }
}
