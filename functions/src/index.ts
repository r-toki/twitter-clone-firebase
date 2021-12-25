import "./config/firebaseApp";

import { functions } from "./infra/functions";

export const echo = functions.https.onCall((data, ctx) => {
  return data;
});
