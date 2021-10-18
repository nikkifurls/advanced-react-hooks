// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext(null);

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = [
    count, setCount
  ];
  const { children } = props;

  return (
    <CountContext.Provider value={value} {...props}>
      {children}
    </CountContext.Provider>
  );
}

function CountDisplay() {
  const [count, setCount] = React.useContext(CountContext);
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [count, setCount] = React.useContext(CountContext);
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
