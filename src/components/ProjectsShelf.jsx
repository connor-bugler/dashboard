import * as elements from "../styles/elements.module.css";
import Button from "./Button";

export default () => (
  <aside className={elements.project_shelf}>
    <header>
      <h3>Projects</h3>

      <Button small>New</Button>
    </header>
  </aside>
);
