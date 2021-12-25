import * as admin from "firebase-admin";

process.env.GOOGLE_CLOUD_PROJECT = "test";
process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
process.env.FIREBAEE_CONFIG = "{}";

admin.initializeApp();
const db = admin.firestore();

(async () => {
  const docRef = await db.collection("users").add({ name: "Michael Scofield" });
  const docSnap = await db.doc("users/" + docRef.id).get();
  console.log(docSnap.data());
})();
