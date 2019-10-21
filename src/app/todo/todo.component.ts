import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../interface/app-state.interface';
import {ToggleAllTodoAction} from '../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  completed: boolean;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.completed = false;
  }

  ngOnInit() { }

  toggleAll() {

    this.completed = !this.completed;

    const action = new ToggleAllTodoAction( this.completed );

    this.store.dispatch( action );

  }

}
