import { useParams } from "react-router-dom";
import { collection } from "firebase/firestore";

import { firestore } from "../firebase";
import * as layout from "../styles/layout.module.css";
import PageHeader from "../components/PageHeader";
import CardList from "../containers/CardList";
import Card from "../components/Card";

export default () => {
  let { project } = useParams();
  return (
    <div className={layout.contentWrapper}>
      <PageHeader title="Project Reports" />

      <CardList source={collection(firestore, "Projects", project, "Reports")}>
        {(doc) => (
          <Card
            key={doc.id}
            title="Mock report of test outcome"
            subTitle={doc.get("Outcome")}
          />
        )}
      </CardList>
    </div>
  );
};
