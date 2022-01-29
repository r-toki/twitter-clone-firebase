import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

import { hello } from "@/my-firebase/functions";

export default function IndexPage() {
  useEffect(() => {
    hello().then((res) => {
      console.log(res);
    });
  }, []);
  return <Box>Home</Box>;
}
