import { Outlet } from "react-router-dom";
import layout from "../styles/layout.module.css";
import NavBar from "../components/NavBar";

export default ({ children, noShelf }) => (
  <div className={layout.container}>
    <NavBar />

    {!noShelf && <ProjectsShelf />}
    <div className={layout.content}>
      {children}
      <Outlet />
    </div>
  </div>
);
