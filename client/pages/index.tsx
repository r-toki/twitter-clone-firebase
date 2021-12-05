import { addDoc, collection, serverTimestamp, Timestamp } from "@firebase/firestore";
import type { NextPage } from "next";
import { ReactNode, useEffect, VFC } from "react";

import { db } from "../config/firebaseApp";
import { Command } from "../utils/firestore";

const Home: NextPage = () => {
  const user: Command.Schema.User = {
    email: "user-1@example.com",
    displayName: "user-1",
    selfIntroduction: "My name is user-1. Nice to meet you.",
    avatar: null,
    createdAt: serverTimestamp() as Timestamp,
    updatedAt: serverTimestamp() as Timestamp,
  };
  useEffect(() => {
    addDoc(collection(db, Command.Path.users()), user);
  }, []);
  return <HomeLayout main={<Main />} left={<Left />} right={<Right />} />;
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

const Main: VFC = () => {
  return <div>Main</div>;
};

const Left: VFC = () => {
  return <div>Left</div>;
};

const Right: VFC = () => {
  return <div>Right</div>;
};
