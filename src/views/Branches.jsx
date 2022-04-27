import { useParams } from "react-router-dom";
import { collection, doc } from "firebase/firestore";

import { firestore } from "../firebase";
import * as layout from "../styles/layout.module.css";
import GithubMark from "../assets/github-mark.png";
import PageHeader from "../components/PageHeader";
import CardList from "../containers/CardList";
import CardLoader from "../containers/CardLoader";
import BranchSummary from "../components/BranchSummary";
import Card from "../components/Card";

export default () => {
  let { project } = useParams();
  return (
    <div className={layout.contentWrapper}>
      <PageHeader title="Repository">
        <CardLoader source={doc(firestore, "Projects", project)}>
          {(doc) => (
            <Card
              externalLink
              link={doc.get("Repository").URL}
              key={doc.id}
              img={GithubMark}
              title={doc.get("Repository").Name}
              subTitle={doc.get("Repository").URL}
            />
          )}
        </CardLoader>
      </PageHeader>

      <CardList source={collection(firestore, "Projects", project, "Branches")}>
        {(doc) => <BranchSummary key={doc.id} doc={doc} />}
      </CardList>
    </div>
  );
};
