import { DocumentReference, Query } from "firebase/firestore";
import {
  useCollectionData,
  useCollectionDataOnce,
  useDocumentData,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";

export const useGetCollection = <Data>(query?: Query<Data> | null | undefined) => {
  const res = useCollectionDataOnce<Data, "id", "ref">(query, { idField: "id", refField: "ref" });
  return res;
};

export const useGetDocument = <Data>(docRef?: DocumentReference<Data> | null | undefined) => {
  const res = useDocumentDataOnce<Data, "id", "ref">(docRef, { idField: "id", refField: "ref" });
  return res;
};

export const useSubscribeCollection = <Data>(query?: Query<Data> | null | undefined) => {
  const res = useCollectionData<Data, "id", "ref">(query, { idField: "id", refField: "ref" });
  return res;
};

export const useSubscribeDocument = <Data>(docRef?: DocumentReference<Data> | null | undefined) => {
  const res = useDocumentData<Data, "id", "ref">(docRef, { idField: "id", refField: "ref" });
  return res;
};
