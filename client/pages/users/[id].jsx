import Router from "next/router";
import { useEffect } from "react";

export default function User() {
  useEffect(() => {
    console.log(Router.asPath);
  }, []);
  return <div>{}</div>;
}
