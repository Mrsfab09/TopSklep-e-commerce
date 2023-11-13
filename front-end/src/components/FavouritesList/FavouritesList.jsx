import { CenterContent } from "../CenterContent/CenterContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouritesList.module.css";

export function FavouritesList({ products }) {
  return (
    <CenterContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        {products.map((product) => {
          return (
            <FavouriteProduct
              key={product.id}
              product={product}
            ></FavouriteProduct>
          );
        })}
      </div>
    </CenterContent>
  );
}
