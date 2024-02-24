import { Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer";

export default function AppLayout() {
  return (
    <>
      <div className="d-flex flex-column" style={{ height: "100vh" }}>
        <Header />
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
