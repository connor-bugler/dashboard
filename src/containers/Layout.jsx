import { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";

import { firestore } from "../firebase";
import layout from "../styles/layout.module.css";
import NavBar from "../components/NavBar";
import ProjectsShelf from "../components/ProjectsShelf";

export default ({ children, noShelf }) => {
  let [state, setState] = useState([]);
  useEffect(() => {
    onSnapshot(collection(firestore, "Projects"), (snapshot) =>
      setState(snapshot.docs)
    );
  }, []);

  return (
    <div className={layout.container}>
      <NavBar />

      {!noShelf && <ProjectsShelf projects={state} />}
      {children}
      <Outlet />
    </div>
  );
};
