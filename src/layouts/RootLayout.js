import Breadcrumbs  from "../components/Breadcrumbs";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        {/* The Outlet tells that where should child routes must render */}
        <Outlet />
      </main>
    </div>
  );
}
