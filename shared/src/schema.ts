import { Timestamp } from "@/_universal/firestore";

import { IdOrRef, StorageItem, WithIdAndRef } from "./types";

export type UserData = {
  displayName: string;
  selfIntroduction: string;
  avatar: StorageItem | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type UserTweetData = {
  content: string;
  images: StorageItem[];
  createdAt: Timestamp;
  creator: Pick<User, IdOrRef>;
  likeCount: number;
};

export type LikeData = {
  creator: Pick<User, IdOrRef>;
  tweet: Pick<UserTweet, IdOrRef>;
};

export type User = WithIdAndRef<UserData>;
export type UserTweet = WithIdAndRef<UserTweetData>;
export type Like = WithIdAndRef<LikeData>;
