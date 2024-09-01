import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const UserInfo = () => {
  const { data, status } = useSession()

  if (status === "loading") {
    return <p>Loading ...</p>
  } 

  if (status === "unauthenticated") {
    redirect("/")
  }
  return (
    <div className="w-full">
      <div className="flex justify-start items-center gap-1 p-1 border border-gray-400 rounded-full">
        <div>
          <Image
            src={data?.user?.image || ""}
            width={50}
            height={50}
            alt="user avatar"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col justify-evenly">
          <span className="max-w-32 truncate font-semibold">{data?.user?.name}</span>
          <span className="max-w-32 truncate">{data?.user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
