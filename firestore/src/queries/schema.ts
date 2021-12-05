import { Timestamp } from "@u-firestore";
import { StorageItem } from "src/types";

export type User = {
  displayName: string;
  selfIntroduction: string;
  avatar: StorageItem | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type UserTweet = {
  content: string;
  images: StorageItem[];
  likeCount: number;
  createdAt: Timestamp;
  creator: {
    displayName: string;
    avatar: StorageItem | null;
  };
};
