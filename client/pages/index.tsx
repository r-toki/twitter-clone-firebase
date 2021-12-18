import { addDoc, collection, getDocs, serverTimestamp, Timestamp } from "@firebase/firestore";
import type { NextPage } from "next";
import { ReactNode, useEffect, useState, VFC } from "react";

import { db } from "@/config/firebaseApp";
import { User, UserData, usersPath } from "@/utils/firestore";

const Home: NextPage = () => {
  useEffect(() => {
    const user: UserData = {
      displayName: "user-1",
      selfIntroduction: "My name is user-1. Nice to meet you.",
      avatar: null,
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
    };
    addDoc(collection(db, usersPath()), user);
  }, []);

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getDocs(collection(db, usersPath())).then((snap) => {
      const _users = snap.docs.map((doc) => ({ id: doc.id, ref: doc.ref, ...doc.data() } as User));
      setUsers(_users);
    });
  }, []);

  return (
    <HomeLayout
      main={
        <Main>
          {users.map((user) => (
            <div key={user.id}>{user.id}</div>
          ))}
        </Main>
      }
      left={<Left />}
      right={<Right />}
    />
  );
};

export default Home;

type HomeLayoutProps = {
  main: ReactNode;
  left: ReactNode;
  right: ReactNode;
};

const HomeLayout: VFC<HomeLayoutProps> = ({ main, left, right }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64">{left}</div>
      <div className="flex-1">{main}</div>
      <div className="w-64">{right}</div>
    </div>
  );
};

type MainProps = {
  children: ReactNode;
};

const Main: VFC<MainProps> = ({ children }) => {
  return <div>{children}</div>;
};

const Left: VFC = () => {
  return <div>Left</div>;
};

const Right: VFC = () => {
  return <div>Right</div>;
};
