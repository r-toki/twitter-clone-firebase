import { DocumentReference } from "@u-firestore";

export type IdOrRef = "id" | "ref";

export type WithIdAndRef<T> = T & { id: string; ref: DocumentReference };

export type StorageItem = {
  path: string;
  url: string;
};
