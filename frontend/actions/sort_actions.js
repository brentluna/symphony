export const SortConstants = {
  APPLY_SORT: 'APPLY_SORT'
};

export const applySort = sort => ({
  type: SortConstants.APPLY_SORT,
  sort
});
