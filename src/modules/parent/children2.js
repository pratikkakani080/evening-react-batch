import React from "react";
import SubChild3 from "./subChild3";
import SubChild4 from "./subChild4";

function Children2({ lakshano, setUpliftedData }) {
  return (
    <div >
      Children2 == {lakshano}
      <SubChild3 setUpliftedData={setUpliftedData} />
      <SubChild4 />
    </div>
  );
}

export default Children2;
