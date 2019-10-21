import {TodoModel} from '../model/todo.model';
import {FilterValidate} from '../types/filter.type';

export interface AppStateInterface {
  toDos: TodoModel[];
  filter: FilterValidate;
}
