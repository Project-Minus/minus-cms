import Columns from "@pages/columns/Columns";
import Dashboard from "@pages/dashboard/Dashboard";
import Layout from "@pages/layout/Layout";
import PostCategories from "@pages/settings/postCategories/PostCategories";
import Traffics from "@pages/settings/traffics/traffics";
import Tables from "@pages/tables/Tables";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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
        path: "/data",
        element: <Outlet />,
        children: [
          {
            path: "tables",
            element: <Tables />,
          },
          {
            path: "columns",
            element: <Columns />,
          },
        ],
      },
      {
        path: "settings",
        element: <Outlet />,
        children: [
          {
            path: "categories",
            element: <PostCategories />,
          },
          {
            path: "traffics",
            element: <Traffics />,
          },
        ],
      },
    ],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={mainRouter} fallbackElement={<Error />} />;
}
