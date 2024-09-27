import React, { useEffect, useState } from "react";
import Input from "../../common/components/input";
import Button from "../../common/components/button";
import { getData, storeData } from "../../common/utils/storage";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useSearchParams } from "react-router-dom";

function Register() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [params] = useSearchParams();
  const userId = params.get("id");

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = getData("users");
    if (userId) {
      const user = storedData.find((el) => el.id === userId);
      setUserInfo(user);
    }
  }, []);

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

  const isCheckEmpty = () => {
    let isFormValid = true;
    let error = {};
    for (const key in userInfo) {
      if (userInfo[key] === "") {
        isFormValid = false;
        error[key] = true;
      }
    }
    setErrors(error);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (isCheckEmpty()) {
      // let userInfo = {fName, lName, email, password, confirmPassword}
      let users = getData("users") || [];
      if (userId) {
        users = users.map((el) => el.id === userId ? userInfo : el);
      } else {
        users.push({ ...userInfo, id: uuidv4() });
      }
      storeData("users", users);
      clearForm();
      if (userId) {
        navigate("/users");
      }
    }
  };

  const handleOnChange = (event) => {
    let data = {};
    Object.assign(data, userInfo, {
      [`${event.target.name}`]: event.target.value,
    });
    // const data = { ...userInfo, [`${event.target.name}`]: event.target.value };
    setUserInfo(data);
    setErrors({ ...errors, [`${event.target.name}`]: false });
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
        isError={errors.fName}
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
        isError={errors.email}
      />
      <Input
        inputLabel={"Password:"}
        type={"password"}
        name={"password"}
        value={userInfo.password}
        // onChange={(ev) => setPassword(ev.target.value)}
        onChange={handleOnChange}
        isError={errors.password}
      />
      <Input
        inputLabel={"Confirm Password:"}
        type={"password"}
        name={"confirmPassword"}
        value={userInfo.confirmPassword}
        // onChange={(ev) => setConfirmPassword(ev.target.value)}
        onChange={handleOnChange}
        isError={errors.confirmPassword}
      />
      <Button buttonName={"Submit"} color={"white"} onClick={handleSubmit} />
    </div>
  );
}

export default Register;
