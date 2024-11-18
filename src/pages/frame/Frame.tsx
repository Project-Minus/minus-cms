import { DashboardLayout } from "@toolpad/core";
import { Outlet } from "react-router-dom";

export default function Frame() {
  return (
    <DashboardLayout hideNavigation>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Outlet />
      </div>
    </DashboardLayout>
  );
}
