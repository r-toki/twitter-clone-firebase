import { httpsCallable } from "firebase/functions";

import { functions } from "@/config/firebaseApp";

export const uploadFile = httpsCallable<string, any>(functions, "uploadFile");
