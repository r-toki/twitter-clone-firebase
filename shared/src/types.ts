import { DocumentReference } from "@firestore-universal/index";

export type IdOrRef = "id" | "ref";

export type WithIdAndRef<T> = T & { id: string; ref: DocumentReference };

export type StorageItem = {
  path: string;
  url: string;
};
