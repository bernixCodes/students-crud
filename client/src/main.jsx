import React from "react";
import ReactDOM from "react-dom/client";
import Student from "./routes/student";
import CreateStudent from "./routes/createStudent";
import UpdateStudent from "./routes/updateStudent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Student />,
  },
  {
    path: "/create",
    element: <CreateStudent />,
  },
  {
    path: "/update/:id",
    element: <UpdateStudent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
