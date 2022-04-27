import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { defaultRenderState } from "./CardList";

const Loading = Symbol();
export default ({ source, children = defaultRenderState }) => {
  let [state, setState] = useState(Loading);
  useEffect(() => {
    onSnapshot(source, (snapshot) => setState(snapshot));
  }, [source]);
  console.log("state", state);
  return state !== Loading && children(state);
};
