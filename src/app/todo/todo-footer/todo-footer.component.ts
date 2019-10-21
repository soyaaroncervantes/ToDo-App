import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppStateInterface} from '../../interface/app-state.interface';
import {FilterValidate} from '../../types/filter.type';

import {TodoModel} from '../../model/todo.model';

import {SetFilterAction} from '../../actions/filter.actions';
import {BorrarAllTodoAction} from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtersValidate: FilterValidate[];
  filterCurrently: FilterValidate;
  toDoPending: number;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.filtersValidate = [ 'All', 'Completed', 'Pending' ];
  }

  ngOnInit() {
    this.store.subscribe( value => {
      this.toDoPending = this.countPending( value.toDos );
      this.filterCurrently = value.filter;
    });
  }

  changeFilter( newFilter: FilterValidate ) {

    const action = new SetFilterAction( newFilter );

    this.store.dispatch( action );

  }

  countPending( toDO: TodoModel[] ): number {
    return toDO.filter( todo => !todo.completed ).length;
  }

  eraseToDoCompleted() {
    const action = new BorrarAllTodoAction();
    this.store.dispatch( action );
  }

}
