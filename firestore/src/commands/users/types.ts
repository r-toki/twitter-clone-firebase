import { Timestamp } from "@u-firestore";
import { StorageItem } from "src/types";

type _User = {
  email: string;
  displayName: string;
  selfIntroduction: string;
  avatar: StorageItem | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

type _Tweet = {
  content: string;
  images: StorageItem[];
  createdAt: Timestamp;
};

export namespace User {
  export type Schema = _User;
  export namespace Tweet {
    export type Schema = _Tweet;
  }
}
