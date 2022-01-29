import * as admin from "firebase-admin";
import * as _functions from "firebase-functions";

admin.initializeApp();

export const functionsBuilder = _functions.region("asia-northeast1");
export const db = admin.firestore();
