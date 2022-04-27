import { Link } from "react-router-dom";
import elements from "../styles/elements.module.css";

export default ({ img, title, subTitle, link, statusIcon, externalLink }) => {
  let C = !!link ? (externalLink ? "a" : Link) : "div";

  return (
    <C
      className={elements.card}
      to={!externalLink ? link : undefined}
      href={externalLink ? link : undefined}
    >
      <header>
        <img src={img} />
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
        {statusIcon && <span>{statusIcon}</span>}
      </header>
    </C>
  );
};
