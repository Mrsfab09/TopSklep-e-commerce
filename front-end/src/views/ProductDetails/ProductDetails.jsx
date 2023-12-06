import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { Photos } from "../../components/Photos/Photos";
import { Details } from "../../components/Details/Details";
import { useLoaderData } from "react-router-dom";

export function ProductDetails() {
  const product = useLoaderData();

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div style={{ width: "100%" }}>
        <BreadCrumbs />
        <FlexContainer>
          <Photos product={product} />
          <Details product={product} />
        </FlexContainer>
      </div>
    </FlexContainer>
  );
}
