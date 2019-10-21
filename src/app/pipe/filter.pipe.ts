import { Pipe, PipeTransform } from '@angular/core';
import {TodoModel} from '../model/todo.model';
import {FilterValidate} from '../types/filter.type';

@Pipe({
  name: 'filterToDo'
})
export class FilterPipe implements PipeTransform {

  transform( valueList: TodoModel[], filter: FilterValidate ): TodoModel[] {

    switch ( filter ) {

      case 'Completed':
        return valueList.filter( value => value.completed );

      case 'Pending':
        return valueList.filter( value => !value.completed );

      default:
        return valueList;

    }

  }

}
