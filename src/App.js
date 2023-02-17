import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  console.log(counter);
  return (
    <div className="App">
      <h1>{counter}</h1>

      <button onClick={() => addCash(Number(prompt()))}>Взять со счета</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      <button></button>
    </div>
  );
}

export default App;
