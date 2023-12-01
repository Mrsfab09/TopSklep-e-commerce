import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";

export function ProductDetails() {
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
        <BreadCrumbs />
      </FlexContainer>
    </Layout>
  );
}
