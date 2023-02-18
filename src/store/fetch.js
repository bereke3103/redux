import { addManyPeople } from './peopleReducer';

export const addManyPeopleFetch = () => {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(addManyPeople(json)));
  };
};
