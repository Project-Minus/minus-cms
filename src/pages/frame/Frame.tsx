import { Outlet } from "react-router-dom";

export default function Frame() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Outlet />
    </div>
  );
}
