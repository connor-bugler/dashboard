import { NavLink } from "react-router-dom";
import * as elements from "../styles/elements.module.css";
import branchPNG from "../assets/icons/branch.png";
import snapshotPNG from "../assets/icons/snapshot.png";
import reportPNG from "../assets/icons/report.png";

export default () => (
  <div className={elements.project_nav}>
    <NavLink to="snapshots">
      <img src={snapshotPNG} />
      Snapshots
    </NavLink>
    <NavLink to="branches">
      <img src={branchPNG} />
      Branches
    </NavLink>
    <NavLink to="reports">
      <img src={reportPNG} />
      Reports
    </NavLink>
  </div>
);
