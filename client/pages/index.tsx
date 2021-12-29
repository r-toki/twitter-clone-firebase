import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { uploadFile } from "@/infra/functions";
import { addDoc, getDocs, serverTimestamp, Timestamp } from "firebase/firestore";
import { typedUsersRef } from "@/infra/firestore";

// const toBase64 = (file: File): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });

// const Home: NextPage = () => {
//   const [avatar, setAvatar] = useState<File | undefined>();

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         if (!avatar) return;
//         toBase64(avatar).then(uploadFile);
//       }}
//     >
//       <input
//         type="file"
//         name="avatar"
//         onChange={(e) => {
//           const files = e.target.files;
//           if (!files) {
//             setAvatar(undefined);
//           } else {
//             setAvatar(files[0]);
//           }
//         }}
//       />
//       <button>Submit</button>
//     </form>
//   );
// };

// export default Home;

export default function () {
  useEffect(() => {
    addDoc(typedUsersRef(), {
      displayName: "",
      selfIntroduction: "",
      avatar: null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }).then(() => {
      getDocs(typedUsersRef()).then((snap) => {
        const users = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(users);
      });
    });
  }, []);
  return <Box>Home</Box>;
}
