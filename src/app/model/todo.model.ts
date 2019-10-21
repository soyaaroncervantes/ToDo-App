import {TodoInterface} from '../interface/todo.interface';

export class TodoModel implements TodoInterface {

  id: number;
  text: string;
  completed: boolean;

  constructor( text: string ) {

    this.text = text.charAt(0).toUpperCase() + text.slice( 1 );

    this.completed = false;

    this.id = Math.random();

  }

}
