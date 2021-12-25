import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();

const functionsAtTokyo = functions.region("asia-northeast1");
const bucket = admin.storage().bucket();

const toFileData = (encoded: string) => encoded.replace(/^data:\w+\/\w+;base64,/, "");

const toContentType = (encoded: string) =>
  encoded.toString().slice(encoded.indexOf(":") + 1, encoded.indexOf(";"));

export const simpleCallable = functionsAtTokyo.https.onCall((encoded: string, ctx) => {
  const buffer = Buffer.from(toFileData(encoded), "base64");
  const contentType = toContentType(encoded);

  const file = bucket.file("users/user1");
  file.save(buffer, { metadata: { contentType } });

  return {
    encoded,
  };
});

// const toFileExtension = (encoded: string) =>
//   encoded.toString().slice(encoded.indexOf("/") + 1, encoded.indexOf(";"));
