import { UserData, usersPath } from "shared/web";

import { db } from "../app";
import { createConverter, createTypedCollectionRef } from "./helper";

export const usersRef = createTypedCollectionRef(db, usersPath, createConverter<UserData>());
