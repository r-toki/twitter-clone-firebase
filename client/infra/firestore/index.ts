export * from "@/infra/firestore/types";
export * from "shared/web";

import { UserData, usersPath } from "shared/web";

import { db } from "@/config/firebaseApp";
import { createConverter, createTypedCollectionRef } from "@/infra/firestore/helper";

export const typedUsersRef = createTypedCollectionRef(db, usersPath, createConverter<UserData>());
