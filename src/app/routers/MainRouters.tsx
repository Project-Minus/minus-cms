import { WriteArticle, ListArtcle } from "@pages/blog";
import Columns from "@pages/columns/Columns";
import Tooltip from "@pages/componentsPage/tooltip/Tooltip";
import Dashboard from "@pages/dashboard/Dashboard";
import Frame from "@pages/frame/Frame";
import Layout from "@pages/layout/Layout";
import PostCategories from "@pages/settings/postCategories/PostCategories";
import Traffics from "@pages/settings/traffics/traffics";

import Tables from "@pages/tables/Tables";
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Error from "./Error";

export const componentRouter: RouteObject = {
  path: "/frame",
  element: <Frame />,
  children: [
    {
      path: "tooltip",
      element: <Tooltip />,
    },
    {
      path: "tooltip/mini",
      element: <Tooltip />,
    },
  ],
};

export const componentRouterInPage: RouteObject = {
  path: "component",
  element: <Outlet></Outlet>,
  children: [...componentRouter.children],
};
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
        path: "blog",
        element: <Outlet />,
        children: [
          {
            path: "write-article",
            element: <WriteArticle />,
          },
          {
            path: "list-article",
            element: <ListArtcle />,
          },
        ],
      },
      componentRouterInPage,
      {
        path: "tables",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Tables />,
          },
          {
            path: "columns/:type/:id",
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
  componentRouter,
]);

export function MainRouter() {
  return <RouterProvider router={mainRouter} fallbackElement={<Error />} />;
}
