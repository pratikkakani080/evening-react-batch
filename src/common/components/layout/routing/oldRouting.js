import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "..";
import Dashboard from "../../../../modules/dashboard";
import ContactUs from "../../../../modules/contactUs";
import Login from "../../../../modules/login";

function OldRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default OldRouting;
