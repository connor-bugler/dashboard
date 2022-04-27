import { NavLink } from "react-router-dom";
import * as layout from "../styles/layout.module.css";
import GithubMark from "../assets/github-mark.png";
import Button from "./Button";

export default ({ projects }) => (
  <aside className={layout.project_shelf}>
    <header>
      <h3>Projects</h3>

      <Button compact>New</Button>
    </header>

    {projects?.map((doc) => (
      <NavLink key={doc.id} to={`/${doc.id}`}>
        <img src={GithubMark} />
        <h4>{doc.get("Name")}</h4>
        <h5>{doc.get("Status")}</h5>
      </NavLink>
    ))}
  </aside>
);
