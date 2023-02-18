const peopleState = {
  people: [],
};

const ADD_PEOPLE = 'ADD_PEOPLE';
const REMOVE_PEOPLE = 'REMOVE_PEOPLE';
const ADD_MANY_PEOPLE = 'ADD_MANY_PEOPLE';

export const peopleReducer = (state = peopleState, action) => {
  switch (action.type) {
    case ADD_PEOPLE:
      return {
        ...state,
        people: [...state.people, action.payload],
      };

    case REMOVE_PEOPLE:
      return {
        ...state,
        people: state.people.filter((man) => man.id !== action.payload),
      };
    case ADD_MANY_PEOPLE:
      return {
        ...state,
        people: [...state.people, ...action.payload],
      };
    default:
      return state;
  }
};

export const addPeopleReducer = (payload) => ({ type: ADD_PEOPLE, payload });

export const addManyPeople = (payload) => ({ type: ADD_MANY_PEOPLE, payload });

export const removePeopleReducer = (payload) => {
  return {
    type: REMOVE_PEOPLE,
    payload,
  };
};
