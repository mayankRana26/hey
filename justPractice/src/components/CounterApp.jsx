import { useState } from "react";
import Counter from "./Counter"; // Import the child component

const CounterApp = () => {
  const [currentCount, setCurrentCount] = useState(0); // State to store the count

  // This function will be called by the child whenever the count changes
  const handleCountChange = (newCount) => {
    setCurrentCount(newCount); // Update the parent's state
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <h2>Current Count in Parent: {currentCount}</h2> {/* Display current count */}
      <Counter initialValue={5} onCountChange={handleCountChange} /> {/* Pass props */}
    </div>
  );
};

export default CounterApp;
