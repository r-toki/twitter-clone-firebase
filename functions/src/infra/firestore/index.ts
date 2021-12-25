import { UserData, usersPath } from "firestore/admin";

import { db } from "../../config/firebaseApp";
import { createConverter, createTypedCollectionRef } from "./helper";

export * from "firestore/admin";

export const typedUsersRef = createTypedCollectionRef(db, usersPath, createConverter<UserData>());
