import { DocumentReference } from "@u-firestore";

type _Like = {
  creator: {
    id: string;
    ref: DocumentReference;
  };
  tweet: {
    id: string;
    ref: DocumentReference;
  };
};

export namespace Like {
  export type Schema = _Like;
}
