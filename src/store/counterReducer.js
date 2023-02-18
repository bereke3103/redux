const counterState = {
  counter: 0,
};

export const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return { ...state, counter: state.counter + action.payload };
    case 'GET_COUNTER':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
