import React from "react";

function SubChild2({ callBackFun }) {
  return <div onClick={() => callBackFun("call back data")}>SubChild2</div>;
}

export default SubChild2;
