import * as functions from "firebase-functions";
import { Command, Query } from "./utils/firestore";

export const helloWorld = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    response.send(
      Command.Path.likes() + " : " + Query.Path.userTweet({ userId: "userId", tweetId: "tweetId" })
    );
  });
