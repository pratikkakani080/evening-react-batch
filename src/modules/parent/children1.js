import React from "react";
import SubChild1 from "./subChild1";
import SubChild2 from "./subChild2";

function Children1({ lakshano, callBackFun }) {
  return (
    <div>
      Children1 == {lakshano}
      <SubChild1 />
      <SubChild2 callBackFun={callBackFun} />
    </div>
  );
}

export default Children1;
