import { redirect } from "react-router-dom";
import { PATH_TO_ENDPOINT_MAPING, BACK_END_URL } from "../constants/api";

export function mainPageLoader({ params }) {
  const backEndPath = PATH_TO_ENDPOINT_MAPING[params.gender];
  if (backEndPath) {
    return fetch(`${BACK_END_URL}/${backEndPath}`);
  } else {
    return redirect("/kobieta");
  }
}
