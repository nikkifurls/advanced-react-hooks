// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  const {count} = state;
  switch (action.type) {
    case 'INCREMENT':
      return {count: count + 1};
    case 'DECREMENT':
      return {count: count - 1};
    default:
      return state;
  }
  
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const {count} = state;
  const increment = () => dispatch({type: 'INCREMENT', step});
  const decrement = () => dispatch({type: 'DECREMENT', step});
  return (
    <>
      <button onClick={increment}>+ {count}</button>
      <button onClick={decrement}>- {count}</button>
    </>
  );
}

function App() {
  return <Counter />
}

export default App
