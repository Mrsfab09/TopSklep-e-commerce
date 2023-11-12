import { CenterContent } from "../CenterContent/CenterContent";
import { Product } from "../Products/Product";
import styles from "./Bestsellers.module.css";

export function Bestsellers({ products }) {
  return (
    <CenterContent>
      <h2 className={styles.bestsellersHeader}>Sprawdz nasze bestsellery</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </CenterContent>
  );
}
