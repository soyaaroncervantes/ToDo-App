import {Action} from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar ToDO';
export const TOGGLE_TODO = '[TODO] Toggle ToDO';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All ToDO';
export const EDITAR_TODO = '[TODO] Editar ToDO';
export const BORRAR_TODO = '[TODO] Borrar ToDO';
export const BORRAR_ALL_TODO = '[TODO] Borrar All ToDO';

export class AgregarTodoAction implements Action {
  readonly type: string = AGREGAR_TODO;
  constructor( public text: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type: string = TOGGLE_TODO;
  constructor( public id: number ) {}
}
export class ToggleAllTodoAction implements Action {
  readonly type: string = TOGGLE_ALL_TODO;
  constructor( public completed: boolean ) {}
}

export class EditarTodoAction implements Action {
  readonly type: string = EDITAR_TODO;
  constructor( public id: number, public text: string ) {}
}

export class BorrarTodoAction implements Action {
  readonly type: string = BORRAR_TODO;
  constructor( public id: number ) {}
}

export class BorrarAllTodoAction implements Action {
  readonly type: string = BORRAR_ALL_TODO;
  constructor() {}
}

export type ToDoActions = AgregarTodoAction | ToggleTodoAction | ToggleAllTodoAction |
                          EditarTodoAction | BorrarTodoAction | BorrarAllTodoAction;
