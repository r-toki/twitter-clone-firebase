import { UserData, usersPath } from "shared/admin";

import { db } from "../../config/firebaseApp";
import { createConverter, createTypedCollectionRef } from "./helper";

export * from "shared/admin";

export const typedUsersRef = createTypedCollectionRef(
  db,
  usersPath,
  createConverter<UserData>()
);
