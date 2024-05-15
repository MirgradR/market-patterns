import Header from "@/widgets/header/ui/Header/Header";
import { MainPage } from "../../pages/main";

function Layout() {
  return (
    <div className={`app`}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}

export default Layout;
