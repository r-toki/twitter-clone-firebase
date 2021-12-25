import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";

import { echo } from "@/infra/functions";

const Home: NextPage = () => {
  useEffect(() => {
    echo({ greeting: "Hello World" }).then((res) => console.log(res));
  });
  return <Box></Box>;
};

export default Home;
