import cx from "classnames";
import * as elements from "../styles/elements.module.css";

export default ({ doc }) => (
  <div
    className={cx(elements.branch_summary, {
      [elements.active]: doc.get("RealTime"),
    })}
  >
    <h1>{doc.get("Name")}</h1>
    <h2>{doc.get("Status")}</h2>
    <div className={elements.user}>
      <img src={doc.get("Author").Avatar} />
      <h3>{doc.get("Author").Name}</h3>
    </div>
    <h4>{doc.get("CommitHash")}</h4>
    <h5>
      <em>{doc.get("PassingCount")}&nbsp;</em> passing snapshots
    </h5>
    <h5>
      <em>{doc.get("FailingCount")}&nbsp;</em> failing snapshots
    </h5>
  </div>
);
