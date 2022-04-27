import cx from "classnames";
import elements from "../styles/elements.module.css";

export default ({ className, compact, ...props }) => (
  <button
    {...props}
    className={cx(elements.button, className, {
      [elements.compact]: compact,
    })}
  />
);
