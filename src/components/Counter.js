import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);

    console.log(`after setState: ${count}`);
  }

  // return <button onClick={increment}>I have been clicked {count} times</button>;

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
