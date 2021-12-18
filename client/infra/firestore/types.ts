import { DocumentReference } from "firebase/firestore";

export type WithIdAndRef<T> = T & { id: string; ref: DocumentReference };
