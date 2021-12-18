export * from "@/infra/firestore/types";
export * from "firestore/web";

import { UserData, usersPath } from "firestore/web";

import { db } from "@/config/firebaseApp";
import { createConverter, createTypedCollectionRef } from "@/infra/firestore/helper";

export const typedUsersRef = createTypedCollectionRef(db, usersPath, createConverter<UserData>());
