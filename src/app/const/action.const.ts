import {ActionReducerMap} from '@ngrx/store';
import {AppStateInterface} from '../interface/app-state.interface';

import * as fromToDO from '../reducer/todo/todo.reducer';
import * as fromFilter from '../reducer/filter/filter.reducer';

export const AppReducers: ActionReducerMap<AppStateInterface> = {
  toDos: fromToDO.toDoReducer,
  filter: fromFilter.filterReducer
};
