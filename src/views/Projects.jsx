import { collection } from "firebase/firestore";

import { firestore } from "../firebase";
import * as layout from "../styles/layout.module.css";
import Layout from "../containers/Layout";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import CardList from "../containers/CardList";
import Card from "../components/Card";

export default () => (
  <Layout noShelf>
    <div className={layout.contentWrapper}>
      <PageHeader title="Projects">
        <Button>Connect</Button>
      </PageHeader>

      <CardList source={collection(firestore, "Projects")}>
        {(doc) => (
          <Card
            link={`/${doc.id}/snapshots`}
            key={doc.id}
            title={doc.get("Name")}
            subTitle={doc.get("Status")}
          />
        )}
      </CardList>
    </div>
  </Layout>
);
