import { Timestamp } from "@u-firestore";
import { StorageItem } from "src/types";

type _User = {
  displayName: string;
  selfIntroduction: string;
  avatar: StorageItem | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

type _Tweet = {
  content: string;
  images: StorageItem[];
  likeCount: number;
  createdAt: Timestamp;
  creator: {
    displayName: string;
    avatar: StorageItem | null;
  };
};

export namespace User {
  export type Schema = _User;
  export namespace Tweet {
    export type Schema = _Tweet;
  }
}
