import { TodoActions, TodoActionTypes } from './todo.actions'
import { State } from '@ngrx/store'

export interface Todo {
  id: number,
  message: string,
  done?: boolean
}

export function TodoReducer(state: Todo[] = [], action: TodoActions): Todo[] {
  switch(action.type) {
    case TodoActionTypes.NEW_TODO: {
      return [
        ...state,
        {
          id: state.length,
          message: action.title,
          done: false
        }
      ]
    }

    case TodoActionTypes.REMOVE_TODO: {
      return state.filter(todo => todo.id !== action.id)
    }

    case TodoActionTypes.CHECK_TODO: {
      return [...state.map(todo => {
        if(todo.id === action.id) {
          return { ...todo, done: true}
        }

        return todo
      })]
    }

    case TodoActionTypes.UNCHECK_TODO: {
      return [...state.map(todo => {
        if(todo.id === action.id) {
          return { ...todo, done: false }
        }

        return todo
      })]
    }

    default: {
      return state
    }
  }
}
