import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard() {
  const data = useSelector((state) => state.my.count);
  console.log("data**", data);

  return (
    <div>
      dashboard <a href={"/contactus"}>To Contact us</a>
    </div>
  );
}

export default Dashboard;
