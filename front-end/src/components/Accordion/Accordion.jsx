import { useState } from "react";
import ARROW_ICON from "../../assets/arrow.svg";
import styles from "./Accordion.module.css";

export function Accordion({ items }) {
  const [activeItemIndex, setActiveItem] = useState(0);
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li
            key={item.title}
            onClick={() => {
              setActiveItem(index);
            }}
          >
            <div className={styles.item}>
              <p>{item.title}</p>
              <img
                className={activeItemIndex === index ? styles.expanded : ""}
                src={ARROW_ICON}
                alt=""
              />
            </div>
            {activeItemIndex === index && (
              <p className={styles.content}>{item.content}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
