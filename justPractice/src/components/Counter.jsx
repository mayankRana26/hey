import { useState, useEffect } from "react";

const Counter = ({ initialValue, onCountChange }) => {
  const [count, setCount] = useState(initialValue); // State to store the count in the child

  const increment = () => setCount(count + 1);
  const decrement = () => count > initialValue && setCount(count - 1);
  const reset = () => setCount(initialValue);

  // Call the parent's function whenever the count changes
  useEffect(() => {
    onCountChange(count); // Notify the parent about the new count
  }, [count, onCountChange]); // Runs whenever `count` changes

  return (
    <div>
      <h2>Count in Child: {count}</h2> {/* Display count */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
