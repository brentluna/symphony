export const FilterConstants = {
  ADD_FILTER: 'ADD_FILTER',
  REMOVE_FILTER: 'REMOVE_FILTER'
}

export const addFilter = filter => ({
  type: FilterConstants.ADD_FILTER,
  filter
});

export const removeFilter = filter => ({
  type: FilterConstants.REMOVE_FILTER,
  filter
});
