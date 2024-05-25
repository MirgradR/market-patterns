import Header from "@/widgets/header/ui/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={`app`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
