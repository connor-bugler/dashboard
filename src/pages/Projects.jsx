import { collection } from "firebase/firestore";

import { firestore } from "../firebase";
import layout from "../styles/layout.module.css";
import Layout from "../containers/Layout";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import CardList from "../containers/CardList";
import Card from "../components/Card";

export default () => (
  <Layout onShelf>
    <div className={layout.contentWrapper}>
      <PageHeader title="Projects">
        <Button>Connect</Button>
      </PageHeader>

      <CardList source={collection(firestore, "Projects")}>
        {(doc) => (
          <Card
            link={`/${doc.id}/snapshots`}
            title={doc.get("Name")}
            subTitle={doc.get("Status")}
          />
        )}
      </CardList>
    </div>
  </Layout>
);
