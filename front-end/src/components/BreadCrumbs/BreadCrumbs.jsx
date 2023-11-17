import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import styles from "./Breadcrumbs.module.css";

export function BreadCrumbs() {
  const breadcrumbs = [
    {
      categoryName: "Kobieta",
      path: "kobieta",
    },
    {
      categoryName: "Odziez",
      path: "odziez",
    },
    {
      categoryName: "Swetry",
      path: "swetry",
    },
  ];
  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink to={breadcrumb.path}>
              {breadcrumb.categoryName}
              <img src={ARROW_ICON} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
