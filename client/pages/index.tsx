import type { NextPage } from "next";
import { ReactNode, useEffect, useState, VFC } from "react";

import { simpleCallable } from "@/infra/functions";

// const Main: VFC = () => {
//   return <div>Main</div>;
// };

// const Left: VFC = () => {
//   return <div>Left</div>;
// };

// const Right: VFC = () => {
//   return <div>Right</div>;
// };

// type HomeLayoutProps = {
//   main: ReactNode;
//   left: ReactNode;
//   right: ReactNode;
// };

// const HomeLayout: VFC<HomeLayoutProps> = ({ main, left, right }) => {
//   return (
//     <div className="flex min-h-screen">
//       <div className="w-64">{left}</div>
//       <div className="flex-1">{main}</div>
//       <div className="w-64">{right}</div>
//     </div>
//   );
// };

// const Home: NextPage = () => {
//   useEffect(() => {
//     simpleCallable({ a: "hello", b: "world" }).then((res) => console.log(res));
//   }, []);
//   return <HomeLayout main={<Main />} left={<Left />} right={<Right />} />;
// };

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Home: NextPage = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!file) return;
          const encoded = await toBase64(file);
          simpleCallable(encoded).then((res) => console.log(res));
        }}
      >
        <input
          type="file"
          onChange={(e) => {
            const { files } = e.target;
            setFile(files ? Array.from(files)[0] : undefined);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
