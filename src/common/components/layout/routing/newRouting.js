import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "..";
import Dashboard from "../../../../modules/dashboard";
import ContactUs from "../../../../modules/contactUs";
import Login from "../../../../modules/login";
import Analytics from "../../../../modules/dashboard/analytics";
import Blog from "../../../../modules/blog";
import BlogDetails from "../../../../modules/blog/blogDetails";
import Register from "../../../../modules/register";
import Users from "../../../../modules/users";
import Parent from "../../../../modules/parent";
import Recipes from "../../../../modules/recipes";

function NewRouting() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/analytics",
          element: <Analytics />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blogdetails/:id",
          element: <BlogDetails />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },
    {
      path: "/parent",
      element: <Parent />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/recipes",
      element: <Recipes />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default NewRouting;
