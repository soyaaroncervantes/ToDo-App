import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interface/app-state.interface';
import {TodoModel} from '../../model/todo.model';
import {FilterValidate} from '../../types/filter.type';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  toDos: TodoModel[];
  filter: FilterValidate;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.toDos = [];
  }

  ngOnInit() {
    this.store.subscribe(
      state => {
        this.filter = state.filter;
        this.toDos = state.toDos;
      }
    );
  }

}
