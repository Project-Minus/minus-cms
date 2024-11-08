import { DashboardLayout } from "@toolpad/core";
import { Outlet } from "react-router-dom";
import "./layout.scss";

export default function Layout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
