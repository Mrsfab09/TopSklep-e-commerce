import { useState } from "react";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import styles from "./Photos.module.css";

export function Photos({ product }) {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);
  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => {
          return (
            <img
              className={currentPhoto === photo ? styles.active : ""}
              onClick={() => {
                setCurrentPhoto(photo);
              }}
              key={photo}
              src={photo}
              alt=""
            />
          );
        })}
      </div>
      <img className={styles.mainPhoto} src={currentPhoto} alt="" />
    </FlexContainer>
  );
}