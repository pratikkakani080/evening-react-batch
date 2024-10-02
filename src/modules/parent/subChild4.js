import React, { useContext } from "react";
import Button from "../../common/components/button";
import MyContext from "../../common/contexts/myContext";

function SubChild4() {
  const { setCount, count } = useContext(MyContext);

  return (
    <div>
      SubChild4
      <Button buttonName={"Update Count"} onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default SubChild4;
