"use client";
import { useSession } from "next-auth/react";
import Header from "./Header";

const Protected = ({ children, title }) => {
  const { status } = useSession();

  return (
    <>
      {status === "loading" && "loading"}
      {status === "authenticated" && (
        <>
          <title>{title}</title>
          <Header />
          <div className="flex justify-center items-center">
            <div className={`w-full h-full`}>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Protected;
