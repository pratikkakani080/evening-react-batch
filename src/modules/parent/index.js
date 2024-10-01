import React, { useState } from "react";
import Children1 from "./children1";
import Children2 from "./children2";

function Parent() {
  const lakshano = "32";
  const [upliftedData, setUpliftedData] = useState("");
  console.log("child-data**", upliftedData);

  const callBackFun = (data) => {
    console.log("data**", data);
  };

  return (
    <div>
      parent
      <Children1 lakshano={lakshano} callBackFun={callBackFun} />
      <Children2 lakshano={lakshano} setUpliftedData={setUpliftedData} />
    </div>
  );
}

export default Parent;
