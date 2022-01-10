import { httpsCallable } from "firebase/functions";

import { functions } from "@/config/firebaseApp";

export const helloWorld = httpsCallable<string, string>(functions, "helloWorld");
