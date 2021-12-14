import { IdOrRef } from "src/types";

import { Command } from "../index";

export type User = Pick<
  Command.Schema.User,
  IdOrRef | "displayName" | "selfIntroduction" | "avatar"
>;

export type UserTweet = {
  creator: Pick<Command.Schema.User, IdOrRef | "displayName" | "avatar">;
  tweet: Pick<Command.Schema.UserTweet, IdOrRef | "content" | "images" | "createdAt"> & {
    favoriteCount: number;
  };
};
