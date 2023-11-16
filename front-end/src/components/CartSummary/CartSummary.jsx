import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";
import styles from "./CartSummary.module.css";

export function CartSummary() {
  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartosc produktów: </p>
        <p>398zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy </p>
        <p>49zł</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty: </p>
        <p>447zł</p>
      </div>
      <FullWidthButton>Do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} alt="" />
        <p>Darmowa dostawa od 500zł</p>
      </div>
    </div>
  );
}
