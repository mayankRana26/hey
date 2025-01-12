import { useState, memo } from "react";

const ChildComponent = memo(({ count }) => {
  console.log("Child rendered!");
  return <div>Count from parent: {count}</div>;
});

const Memo = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
      <ChildComponent count={count} />
    </div>
  );
};

export default Memo;
