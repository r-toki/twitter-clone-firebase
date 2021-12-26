import "./config/firebaseApp";

import * as admin from "firebase-admin";
import * as _functions from "firebase-functions";

const functions = _functions.region("asia-northeast1");
const bucket = admin.storage().bucket();

const toFileData = (encoded: string) => encoded.replace(/^data:\w+\/\w+;base64,/, "");

const toContentType = (encoded: string) =>
  encoded.toString().slice(encoded.indexOf(":") + 1, encoded.indexOf(";"));

export const uploadFile = functions.https.onCall(async (encoded: string, ctx) => {
  const buffer = Buffer.from(toFileData(encoded), "base64");
  const contentType = toContentType(encoded);

  const file = bucket.file("users/user1");
  await file.save(buffer, { metadata: { contentType } });

  const metadata = await file.getMetadata();
  console.log("metadata", metadata[1].body.mediaLink);

  return {
    encoded,
  };
});
