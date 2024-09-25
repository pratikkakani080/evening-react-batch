import React, { useState } from "react";
import Input from "../../common/components/input";
import Button from "../../common/components/button";
import { getData, storeData } from "../../common/utils/storage";

function Register() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // console.log("**", fName, lName, email, password, confirmPassword);

  const [userInfo, setUserInfo] = useState({});

  console.log("userInfo_out**", userInfo);

  const clearForm = () => {
    setUserInfo({
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    // setFName("");
    // setLName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
  };

  const handleSubmit = () => {
    let users = getData("users") || [];
    users.push(userInfo);
    storeData("users", users);
    clearForm();
  };

  const handleOnChange = (event) => {
    const data = {
      ...userInfo,
      [`${event.target.name}`]: event.target.value,
    };
    setUserInfo(data);
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
        value={userInfo.fName}
        // onChange={(ev) => setFName(ev.target.value)}
        onChange={handleOnChange}
      />
      <Input
        inputLabel={"Last Name:"}
        type={"text"}
        name={"lName"}
        value={userInfo.lName}
        // onChange={(ev) => setLName(ev.target.value)}
        onChange={handleOnChange}
      />
      <Input
        inputLabel={"Email:"}
        type={"email"}
        name={"email"}
        value={userInfo.email}
        // onChange={(ev) => setEmail(ev.target.value)}
        onChange={handleOnChange}
      />
      <Input
        inputLabel={"Password:"}
        type={"password"}
        name={"password"}
        value={userInfo.password}
        // onChange={(ev) => setPassword(ev.target.value)}
        onChange={handleOnChange}
      />
      <Input
        inputLabel={"Confirm Password:"}
        type={"password"}
        name={"confirmPassword"}
        value={userInfo.confirmPassword}
        // onChange={(ev) => setConfirmPassword(ev.target.value)}
        onChange={handleOnChange}
      />
      <Button buttonName={"Submit"} color={"white"} onClick={handleSubmit} />
    </div>
  );
}

export default Register;
