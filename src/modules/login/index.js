import React, { useContext } from "react";
import AuthContext from "../../common/contexts/authContext";

function Login() {
  const data = useContext(AuthContext);
  console.log("data**", data);

  return <div>login</div>;
}

export default Login;
