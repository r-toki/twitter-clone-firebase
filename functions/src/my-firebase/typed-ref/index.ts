import { UserData, usersPath } from "shared/admin";

import { db } from "../app";
import { createConverter, createTypedCollectionRef } from "./helper";

export const usersRef = createTypedCollectionRef(db, usersPath, createConverter<UserData>());
