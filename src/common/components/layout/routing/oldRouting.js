import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "..";
import Dashboard from "../../../../modules/dashboard";
import ContactUs from "../../../../modules/contactUs";
import Login from "../../../../modules/login";
import Analytics from "../../../../modules/dashboard/analytics";
import BlogDetails from "../../../../modules/blog/blogDetails";
import Blog from "../../../../modules/blog";

function OldRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default OldRouting;
