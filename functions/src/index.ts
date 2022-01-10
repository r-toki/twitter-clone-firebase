import "./config/firebaseApp";

// import * as admin from "firebase-admin";
import * as _functions from "firebase-functions";

const functions = _functions.region("asia-northeast1");

export const helloWorld = functions.https.onCall(async () => {
  return "HELLO WORLD";
});
