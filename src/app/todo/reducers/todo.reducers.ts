import { Todo } from '@shared/models'

import { TodoActions, TodoActionTypes } from './todo.actions'

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
      const itemIndex = state.findIndex(todo => todo.id === action.id)
      return [ ...state.map((todo, index) => {
        if(todo.id !== action.id)
        {
          return todo
        }

        return { ...todo, ...{ done: true } }
      }]
    }

    case TodoActionTypes.UNCHECK_TODO: {
      return [...state.map((todo, index) => {
        if(todo.id !== action.id)
        {
          return todo
        }

        return { ...todo, ...{ done: false } }
      })]
    }

    default: {
      return state
    }
  }
}
