import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';


const App = () => {

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux Concept</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(actions.increment())}>Add</button>
      <button onClick={() => dispatch(actions.decrement())}>Remove</button>
    </div>
  );
}

export default App;
