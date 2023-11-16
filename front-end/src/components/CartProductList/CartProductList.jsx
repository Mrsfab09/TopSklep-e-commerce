import { CenterContent } from "../CenterContent/CenterContent";
import { CartProduct } from "../CartProduct/CartProduct";
import styles from "./CartProductList.module.css";

export function CartProductList({ products }) {
  return (
    <CenterContent>
      <div className={styles.favouritesList}>
        <h2>Koszyk</h2>
        {products.map((product) => {
          return <CartProduct key={product.id} product={product}></CartProduct>;
        })}
      </div>
    </CenterContent>
  );
}
