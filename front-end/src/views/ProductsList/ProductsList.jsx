import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

export function ProductsList() {
  const products = useLoaderData();
  const params = useParams();

  const foundCategory = CATEGORIES.find((c) => c.path === params.category);

  let foundSubCategory;

  if (params.subcategory) {
    foundSubCategory = foundCategory.subcategories.find(
      (sc) => sc.path === params.subcategory
    );
  }

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <BreadCrumbs />
        <Bestsellers
          headerText={
            foundSubCategory
              ? foundSubCategory.categoryName
              : foundCategory.categoryName
          }
          products={products}
        />
        <Pagination numberOfPages={5} />
      </div>
    </FlexContainer>
  );
}
