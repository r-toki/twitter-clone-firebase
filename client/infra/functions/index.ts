import { httpsCallable } from "firebase/functions";

import { functions } from "@/config/firebaseApp";

export const echo = httpsCallable<any, any>(functions, "echo");
