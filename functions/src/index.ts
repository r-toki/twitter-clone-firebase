import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();

const functionsAtTokyo = functions.region("asia-northeast1");

export const echo = functionsAtTokyo.https.onCall((data, ctx) => {
  return data;
});
