import { CenterContent } from "../CenterContent/CenterContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouritesList.module.css";

export function FavouritesList({ products }) {
  return (
    <CenterContent>
      <h2>Ulubione</h2>
      <div className={styles.favouritesList}>
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
