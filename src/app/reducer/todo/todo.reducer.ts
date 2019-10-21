import * as fromToDo from '../../actions/todo.actions';
import {TodoModel} from '../../model/todo.model';

const todo1 = new TodoModel('Enviar mi Scrum');
const todo2 = new TodoModel('Salvar a Batman');
const todo3 = new TodoModel('Nunca dejar de Aprender');

todo2.completed = true;

const stateInit: TodoModel[] = [todo1, todo2, todo3];

export function toDoReducer( state = stateInit, action: fromToDo.ToDoActions ): TodoModel[] {

  switch ( action.type ) {

    case fromToDo.AGREGAR_TODO:

      // @ts-ignore
      const toDoModel = new TodoModel( action.text );

      return [ toDoModel, ...state ];

    case fromToDo.TOGGLE_TODO:

      return state.map( value => {

        // @ts-ignore
        if ( value.id === action.id ) {
          return { ...value, completed: !value.completed };
        }

        return value;

      });
    case fromToDo.TOGGLE_ALL_TODO:

      return state.map( value => {

        // @ts-ignore
        return { ...value, completed: action.completed };

      });

    case fromToDo.EDITAR_TODO:

      return state.map( value => {

        // @ts-ignore
        if ( value.id === action.id ) {

          // @ts-ignore
          return { ...value, text: action.text };

        }

        return value;

      });

    case fromToDo.BORRAR_TODO:

      // @ts-ignore
      return state.filter( value => value.id !== action.id );

    case fromToDo.BORRAR_ALL_TODO:
      return state.filter( value => !value.completed );

    default:
      return state;
  }

}
