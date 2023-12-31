function filterReducer(filter, action) {
  switch (action.type) {
    default:
      return;

    case 'toggleOpenNow':
      return {
        ...filter,
        openNow: !filter.openNow,
      };

    case 'selectPrice':
      return { ...filter, price: action.price };

    case 'selectCategories':
      return { ...filter, categories: action.categories };

    case 'reset':
      return action.filterInitialValues;
  }
}

export default filterReducer;
