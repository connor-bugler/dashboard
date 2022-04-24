import { useParams } from "react-router-dom";

import layout from "../styles/layout.module.css";
import logoPNG from "../assets/full-logo.png";
import ProjectNav from "./ProjectNav";

const placeholderIMG =
  "https://ph-files.imgix.net/c495260b-6e2b-4987-b44e-a669dce024c6.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=380&h=380&fit=max&bg=0fff&dpr=1";

export default () => {
  let params = useParams();
  let { project } = params;
  console.log("params", params);

  return (
    <nav className={layout.navbar}>
      <img src={logoPNG} />

      {project && <ProjectNav />}

      <div className={layout.user}>
        <img src={placeholderIMG} />
        <span>Bill Programmer</span>
      </div>
    </nav>
  );
};
