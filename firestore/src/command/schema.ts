import { DocumentReference, Timestamp } from "@u-firestore";
import { StorageItem } from "src/types";

export type User = {
  email: string;
  displayName: string;
  selfIntroduction: string;
  avatar: StorageItem | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type UserTweet = {
  content: string;
  images: StorageItem[];
  createdAt: Timestamp;
};

export type Like = {
  creator: {
    id: string;
    ref: DocumentReference;
  };
  tweet: {
    id: string;
    ref: DocumentReference;
  };
};
