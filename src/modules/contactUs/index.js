import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/components/button";

function ContactUs() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div>
      Contact us <Button onClick={handleNavigate}>To Login</Button>
    </div>
  );
}

export default ContactUs;
