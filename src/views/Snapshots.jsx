import { useRef } from "react";
import { useParams } from "react-router-dom";
import { collection } from "firebase/firestore";

import { firestore } from "../firebase";
import * as layout from "../styles/layout.module.css";
import PageHeader from "../components/PageHeader";
import CardList from "../containers/CardList";
import Card from "../components/Card";

export default () => {
  let params = useParams();
  let { project } = params;

  return (
    <div className={layout.contentWrapper}>
      <PageHeader title="Data Sources" />
      <CardList
        source={collection(firestore, `Projects/${project}/DataSources`)}
      >
        {(doc) => (
          <Card
            key={doc.id}
            title={doc.get("Name")}
            subTitle={doc.get("ClientType")}
          />
        )}
      </CardList>
    </div>
  );
};
