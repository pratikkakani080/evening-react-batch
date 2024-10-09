import React, { useCallback, useMemo, useState } from "react";
import Count from "./Count";

function MemoExample() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [count]);

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        <Count {...{ increment, calculation, count }} />
      </div>
    </div>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...***");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default MemoExample;
