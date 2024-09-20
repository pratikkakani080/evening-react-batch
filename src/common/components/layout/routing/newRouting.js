import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "..";
import Dashboard from "../../../../modules/dashboard";
import ContactUs from "../../../../modules/contactUs";
import Login from "../../../../modules/login";

function NewRouting() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/contactus",
      element: <ContactUs />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default NewRouting;
