import { httpsCallable } from "firebase/functions";

import { functions } from "./app";

export const hello = httpsCallable<any, string>(functions, "hello");
