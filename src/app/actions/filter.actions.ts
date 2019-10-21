import {Action} from '@ngrx/store';
import {FilterValidate} from '../types/filter.type';

export const SET_FILTER = '[Filter]  Set Filter';

export class SetFilterAction implements Action {
  readonly type: string = SET_FILTER;
  constructor( public filter: FilterValidate ) { }
}

export type Actions = SetFilterAction;
