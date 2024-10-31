import Dashboard from "@pages/dashboard/Dashboard";
import Layout from "@pages/layout/Layout";
import Others from "@pages/others/Others";
import PostCategories from "@pages/settings/postCategories/PostCategories";
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
        path: "/others",
        element: <Others />,
      },
      {
        path: "settings",
        element: <Outlet />,
        children: [
          {
            path: "categories",
            element: <PostCategories />,
          },
        ],
      },
    ],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={mainRouter} fallbackElement={<Error />} />;
}
