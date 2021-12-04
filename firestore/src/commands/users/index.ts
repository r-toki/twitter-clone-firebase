import { Timestamp } from "@u-firestore";

import { COMMAND_V1 } from "../command-v1";

type _User = {
  email: string;
  createdAt: Timestamp;
};

type _Tweet = {
  content: string;
  createdAt: Timestamp;
};

export namespace User {
  export type Schema = _User;
  export namespace Tweet {
    export type Schema = _Tweet;
  }
}

const USERS = [COMMAND_V1, "users"].join("/");
const TWEETS = "tweets";

export const users = {
  path: [USERS].join("/"),
  doc: (userId: string) => ({
    path: [USERS, userId, TWEETS].join("/"),
    tweets: tweets(userId),
  }),
};

const tweets = (userId: string) => ({
  path: [USERS, userId, TWEETS].join("/"),
  doc: (tweetId: string) => ({
    path: [USERS, userId, TWEETS, tweetId].join("/"),
  }),
});
