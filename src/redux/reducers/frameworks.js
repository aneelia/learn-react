const initialState = ['angular'];

function frameworks(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FRAMEWORK':
      return [...state, action.payload];
    case 'DELETE_FRAMEWORK':
      return state;
    default:
      return state;
  }
}

export default frameworks;
