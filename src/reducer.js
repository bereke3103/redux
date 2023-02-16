const initalState = { value: 0 };

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DEC':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'RND':
      return {
        ...state,
        value: state.value * action.payload,
      };
  }
};

export default reducer;
