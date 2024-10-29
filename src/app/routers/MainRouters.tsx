import Dashboard from "@pages/dashboard/Dashboard";
import Layout from "@pages/layout/Layout";
import Others from "@pages/others/Others";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/others",
        element: <Others />,
      },
    ],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={mainRouter} fallbackElement={<Error />} />;
}
