// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext();

const useCount = () => {
  const count = React.useContext(CountContext);

  if (!count) {
    throw new Error("useCount() must be used within a CountProvider.");
  }

  return count;
};

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
  const [count, setCount] = useCount();
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [count, setCount] = useCount();
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
      {/* <CountDisplay />
      <Counter /> */}
    </div>
  )
}

export default App
