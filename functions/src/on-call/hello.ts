import { FieldValue, Timestamp } from "firebase-admin/firestore";

import { functionsBuilder } from "../my-firebase/app";
import { usersRef } from "./../my-firebase/typed-ref/index";

export const hello = functionsBuilder.https.onCall(async (data, context) => {
  await usersRef().add({
    displayName: "",
    selfIntroduction: "",
    avatar: null,
    createdAt: Timestamp.now(),
    updatedAt: FieldValue.serverTimestamp() as Timestamp,
  });
  return "hello".toUpperCase();
});
