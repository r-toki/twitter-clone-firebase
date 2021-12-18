import type { NextPage } from "next";
import { ReactNode, VFC } from "react";

const Main: VFC = () => {
  return <div>Main</div>;
};

const Left: VFC = () => {
  return <div>Left</div>;
};

const Right: VFC = () => {
  return <div>Right</div>;
};

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

const Home: NextPage = () => {
  return <HomeLayout main={<Main />} left={<Left />} right={<Right />} />;
};

export default Home;
