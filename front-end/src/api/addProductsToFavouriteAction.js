import { BACK_END_URL } from "../constants/api";

export function addProductsToFavouriteAction({ params: { productId } }) {
  return fetch(`${BACK_END_URL}/favourites`, {
    method: "POST",
    body: JSON.stringify({
      productId: Number(productId),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
