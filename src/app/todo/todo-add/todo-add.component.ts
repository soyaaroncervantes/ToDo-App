import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Store} from '@ngrx/store';

import {AppStateInterface} from '../../interface/app-state.interface';

import * as fromTodo from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  formControl: FormControl;

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.formControl = new FormControl( '', Validators.required );
  }

  addToDo() {

    if ( this.formControl.invalid ) {
      return;
    }

    const action = new fromTodo.AgregarTodoAction( this.formControl.value );
    this.store.dispatch( action );

    this.formControl.reset();

  }

}
