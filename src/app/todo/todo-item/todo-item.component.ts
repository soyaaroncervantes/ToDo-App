import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TodoModel} from '../../model/todo.model';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interface/app-state.interface';
import {BorrarTodoAction, EditarTodoAction, ToggleTodoAction} from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() toDo: TodoModel;
  @ViewChild( 'inputElement', { static: false } ) inputElement: ElementRef;

  checkField: FormControl;
  textInput: FormControl;

  editing: boolean;

  constructor(
    private store: Store<AppStateInterface>,
  ) { }

  ngOnInit() {

    this.checkField = new FormControl( this.toDo.completed );

    this.textInput = new FormControl( this.toDo.text, Validators.required );

    this.checkField.valueChanges.subscribe(
      () => {
        const action = new ToggleTodoAction( this.toDo.id );
        this.store.dispatch( action );
      }
    );

  }

  edit() {

    this.editing = true;

    setTimeout( () => this.inputElement.nativeElement.select(), 0);

  }

  finishEdit() {

    this.editing = false;

    if ( this.textInput.invalid || this.textInput.value === this.toDo.text ) {
      return;
    }

    const action = new EditarTodoAction( this.toDo.id, this.textInput.value );
    this.store.dispatch( action );

  }

  delete() {
    const action = new BorrarTodoAction( this.toDo.id );
    this.store.dispatch( action );
  }

}
