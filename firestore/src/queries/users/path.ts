import { QUERY_V1 } from "../query-v1";

const USERS = [QUERY_V1, "users"].join("/");
const TWEETS = "tweets";

export const users = {
  path: USERS,
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
