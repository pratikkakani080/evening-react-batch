import React, { useState } from "react";
import Input from "../../common/components/input";
import Button from "../../common/components/button";

function Register() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  console.log("**", fName, lName, email, password, confirmPassword);

  const handleOnClick = () => {
    const body = { fName, lName, email, password, confirmPassword };
    // localStorage.setItem()
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
      }}
    >
      <Input
        inputLabel={"First Name:"}
        type={"text"}
        name={"fName"}
        onChange={(ev) => setFName(ev.target.value)}
      />
      <Input
        inputLabel={"Last Name:"}
        type={"text"}
        name={"lName"}
        onChange={(ev) => setLName(ev.target.value)}
      />
      <Input
        inputLabel={"Email:"}
        type={"email"}
        name={"email"}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <Input
        inputLabel={"Password:"}
        type={"password"}
        name={"password"}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <Input
        inputLabel={"Confirm Password:"}
        type={"password"}
        name={"confirmPassword"}
        onChange={(ev) => setConfirmPassword(ev.target.value)}
      />
      <Button buttonName={"Submit"} color={"white"} onClick={handleOnClick} />
    </div>
  );
}

export default Register;
