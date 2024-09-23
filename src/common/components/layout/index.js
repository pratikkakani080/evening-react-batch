import React, { useEffect, useState } from "react";
import Button from "../button";
import Input from "../input";
import { Link, Outlet } from "react-router-dom";

function Layout(props) {
  // your javascript will be here
  const [state, setState] = useState("test");
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  console.log("component rerendering**", props);

  useEffect(() => {
    console.log("running on mounting**");
    // cleanup function
    return () => {
      // this will only run on time un mounting
      console.log("component unmounting***");
    };
  }, [state]); // dependency array

  const handleOnClick = () => {
    setState(state === "test" ? "testing" : "test");
  };
  return (
    <div>
      <Link to={"/dashboard"}>To Dashboard</Link>
      <Input />
      {state}
      <Button className={"colorPink"} onClick={handleOnClick} />
      <Button buttonName={"First"} />
      <Outlet />
    </div>
  );
}

export default Layout;
