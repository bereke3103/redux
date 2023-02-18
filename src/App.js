import { useDispatch, useSelector } from 'react-redux';
import { addManyPeopleFetch } from './store/fetch';
import { addPeopleReducer, removePeopleReducer } from './store/peopleReducer';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);
  const people = useSelector((state) => state.people.people);
  console.log(people);

  const addCash = () => {
    dispatch({ type: 'ADD_COUNTER', payload: 50 });
  };

  const getCash = () => {
    dispatch({ type: 'GET_COUNTER', payload: 10 });
  };

  const addPeople = (name) => {
    const newPeople = {
      id: Date.now(),
      name,
    };

    dispatch(addPeopleReducer(newPeople));
  };

  const removePeople = (name) => {
    dispatch(removePeopleReducer(name.id));
  };

  console.log(counter);
  return (
    <div className="App">
      <h1>{counter}</h1>

      <button onClick={addCash}>Взять со счета</button>
      <button onClick={getCash}>Снять со счета</button>

      <div>
        <button onClick={() => addPeople(prompt())}>Добавить челока</button>
        <button onClick={() => dispatch(addManyPeopleFetch())}>
          Добавить людей из базы данных
        </button>
        {people.length < 0 ? (
          <div>Нет людей</div>
        ) : (
          people.map((man) => (
            <h1 onClick={() => removePeople(man)}>{man.name}</h1>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
