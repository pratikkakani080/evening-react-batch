import React, { memo } from "react";

function Count({ count, increment, calculation }) {
  console.log("***count component re-rendering");

  return (
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {calculation}
    </div>
  );
}

export default memo(Count);
