import React, { useContext } from "react";
import MyContext from "../../common/contexts/myContext";

function SubChild1() {
  const { count } = useContext(MyContext);

  return <div>SubChild1 count is {count}</div>;
}

export default SubChild1;
