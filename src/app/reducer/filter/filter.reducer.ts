import * as fromFilter from '../../actions/filter.actions';
import {FilterValidate} from '../../types/filter.type';

const stateInit: FilterValidate = 'All';

export function filterReducer( state = stateInit, action: fromFilter.Actions ): FilterValidate {

  switch ( action.type ) {

    case fromFilter.SET_FILTER:
      return action.filter;

    default:
      return state;
  }

}
