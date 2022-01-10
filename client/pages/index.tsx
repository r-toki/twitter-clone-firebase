import { Box } from "@chakra-ui/react";

import { typedUsersRef } from "@/infra/firestore";
import { useSubscribeCollection } from "@/hooks/useFirestore";

export default function () {
  const [users] = useSubscribeCollection(typedUsersRef());
  console.log(users?.map((user) => user.displayName));

  return <Box>Home</Box>;
}
