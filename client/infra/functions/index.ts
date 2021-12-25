import { httpsCallable } from "firebase/functions";

import { functions } from "@/config/firebaseApp";

export const simpleCallable = httpsCallable(functions, "simpleCallable");
