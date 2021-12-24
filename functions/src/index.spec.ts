// import * as admin from "firebase-admin";

// process.env.GOOGLE_CLOUD_PROJECT = "test";
// process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
// process.env.FIREBAEE_CONFIG = "{}";

// admin.initializeApp();
// const db = admin.firestore();
// const auth = admin.auth();
// const strorage = admin.storage();

// it("sample", async () => {
//   const res1 = await db.collection("users").add({ name: "Micheal" });
//   console.log(res1.id);
//   const res2 = await db.doc("users/" + res1.id).get();
//   console.log(res2.data());
//   expect(process.env.GOOGLE_CLOUD_PROJECT).toBe("test");
// });
