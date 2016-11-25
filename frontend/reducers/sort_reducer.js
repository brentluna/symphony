import {SortConstants} from '../actions/sort_actions';

const SortReducer = (state = 'Price: Low', action) => {
  switch(action.type) {
    case SortConstants.APPLY_SORT:
      return action.sort;
    default:
      return state;
  }
};

export default SortReducer;
