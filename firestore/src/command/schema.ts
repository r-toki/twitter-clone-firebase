import { Timestamp } from "@u-firestore";

import { IdOrRef, StorageItem, WithIdAndRef } from "../types";

export type UserFields = {
  displayName: string;
  selfIntroduction: string;
  avatar: StorageItem | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type User = WithIdAndRef<UserFields>;

export type UserTweetFields = {
  content: string;
  images: StorageItem[];
  createdAt: Timestamp;
  creator: Pick<User, IdOrRef>;
};

export type UserTweet = WithIdAndRef<UserTweetFields>;

export type LikeFields = {
  creator: Pick<User, IdOrRef>;
  tweet: Pick<UserTweet, IdOrRef>;
};
