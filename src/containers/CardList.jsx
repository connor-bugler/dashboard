import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import * as layout from "../styles/layout.module.css";
import Card from "../components/Card";

export const defaultRenderState = (doc) => (
  <Card key={doc.id} title={doc.get("Name") || doc.id} />
);
export default ({ source, columns, children = defaultRenderState }) => {
  let [state, setState] = useState([]);
  useEffect(() => {
    onSnapshot(source, (snapshot) => setState(snapshot.docs));
  }, [source]);
  return (
    <div style={{ "--columns": columns }} className={layout.card_list}>
      {state?.map(children)}
    </div>
  );
};
