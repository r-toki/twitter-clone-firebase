import * as functions from "firebase-functions";
import { users } from "../firestore/src/commands";

export const helloWorld = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    response.send(users.doc("1").tweets.path);
  });
