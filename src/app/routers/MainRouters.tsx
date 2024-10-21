import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Error from "./Error";

const mainRouter = createBrowserRouter([
  {
    path: "/:id",
    element: <></>,
    children: [],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={mainRouter} fallbackElement={<Error />} />;
}
