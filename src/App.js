import "./App.css";

import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/action";
import { increment, decrement } from "./toolkit/reducer";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Redux Toolkit</h1>

      <button onClick={() => dispatch(increment())}>increment</button>

      <span>{count}</span>

      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
