import { COMMAND_V1 } from "../command-v1";

const LIKES = [COMMAND_V1, "users"].join("/");

export const likes = {
  path: LIKES,
  doc: (likeId: string) => ({
    path: [LIKES, likeId].join("/"),
  }),
};
