import { DocumentReference, Query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

import { WithIdAndRef } from "@/infra/firestore";

export const useDocs = <Data>(query?: Query<Data> | null | undefined) => {
  const [value, set] = useState<WithIdAndRef<Data>[]>();
  const [snapshot, loading, error] = useCollection(query);

  useEffect(() => {
    const newValue = snapshot?.docs.map((doc) => ({ id: doc.id, ref: doc.ref, ...doc.data() }));
    set(newValue);
  }, [snapshot]);

  return {
    value,
    snapshot,
    loading,
    error,
  };
};

export const useDoc = <Data>(docRef?: DocumentReference<Data> | null | undefined) => {
  const [value, set] = useState<WithIdAndRef<Data>>();
  const [snapshot, loading, error] = useDocument(docRef);

  useEffect(() => {
    const newValue = snapshot?.exists()
      ? { id: snapshot.id, ref: snapshot.ref, ...snapshot.data()! }
      : undefined;
    set(newValue);
  }, [snapshot]);

  return {
    value,
    snapshot,
    loading,
    error,
  };
};
