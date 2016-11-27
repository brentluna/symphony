import {FilterConstants} from '../actions/filter_actions';

const FilterReducer = (state = {}, action) => {
  switch(action.type) {
    case FilterConstants.ADD_FILTER:
      let addedObj = Object.assign({}, state);
      addedObj[action.filter] = true;
      return addedObj;
    case FilterConstants.REMOVE_FILTER:
      let removedObj = Object.assign({}, state);
      delete removedObj[action.filter]
      return removedObj;
    default:
      return state;
  }
}

export default FilterReducer;
