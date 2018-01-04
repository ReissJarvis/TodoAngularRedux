import { Action } from '@ngrx/store'

export enum TodoActionTypes {
  NEW_TODO = 'NEW_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  CHECK_TODO = 'CHECK_TODO',
  UNCHECK_TODO = 'UNCHECK_TODO'
}

export class NewTodo implements Action {
  readonly type = TodoActionTypes.NEW_TODO

  constructor(public title: string) {}

}

export class RemoveTodo implements Action {
  readonly type = TodoActionTypes.REMOVE_TODO

  constructor(public id: number) {}
}

export class CheckTodo implements Action {
  readonly type = TodoActionTypes.CHECK_TODO

  constructor(public id: number) {}
}

export class UncheckTodo implements Action {
  readonly type = TodoActionTypes.UNCHECK_TODO

  constructor(public id: number) {}
}

export type TodoActions
  = NewTodo
  | RemoveTodo
  | CheckTodo
  | UncheckTodo
