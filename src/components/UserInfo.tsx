
import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

const UserInfo = () => {
  // const { data, status } = useSession()

  // if (status === "loading") {
  //   return <p>Loading ...</p>
  // } 

  // if (status === "unauthenticated") {
  //   redirect("/")
  // }
  return (
    <div className="w-full">
      <div className="flex justify-start items-center gap-1 p-1 border border-gray-400 rounded-full">
        <div>
          <div
            className="rounded-full h-[50px] w-[50px] bg-gray-300 text-black font-bold flex items-center justify-center"
          >
            RA
          </div>
        </div>

        <div className="flex flex-col justify-evenly">
          <span className="max-w-32 truncate font-semibold">Rajendra</span>
          <span className="max-w-32 truncate">rajendrapatha2702@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
