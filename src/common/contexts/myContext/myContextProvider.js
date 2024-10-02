import React, { useState } from "react";
import MyContext from ".";

function MyContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MyContext.Provider value={{ count, setCount }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default MyContextProvider;
