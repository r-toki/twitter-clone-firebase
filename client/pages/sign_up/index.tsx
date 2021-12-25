import { Box } from "@chakra-ui/react";
import { serverTimestamp } from "firebase/firestore";
import { NextPage } from "next";
import { useEffect } from "react";

import { typedUsersRef, UserData, userPath } from "@/infra/firestore";

const userData: UserData = {
  displayName: "",
  selfIntroduction: "",
  avatar: null,
  createdAt: serverTimestamp() as any,
  updatedAt: serverTimestamp() as any,
};

const SignUpPage: NextPage = () => {
  useEffect(() => {
    console.log(typedUsersRef);
  });
  return <Box height="100vh" bg="gray.100"></Box>;
};

export default SignUpPage;
