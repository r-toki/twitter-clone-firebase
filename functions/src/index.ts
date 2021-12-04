import * as functions from "firebase-functions";
import { Commands } from "../firestore/src";

export const helloWorld = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    response.send(Commands.users.doc("1").tweets.path);
  });
