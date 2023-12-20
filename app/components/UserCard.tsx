import React from "react";
import Image from "next/image";

interface Props {
  avatar: string;
  name: string;
  post?: string;
}

const userCard = ({ avatar, name, post }: Props) => {
  return (
    <div
      className={`flex items-center ${
        post ? "space-x-16 mt-40" : "space-x-12 mt-20"
      }`}
    >
      {post ? (
        <Image
          src={avatar}
          alt="avatar"
          width={58}
          height={58}
          style={{ height: "auto" }}
        />
      ) : (
        <Image
          src={avatar}
          alt="avatar"
          width={32}
          height={32}
          style={{ height: "auto" }}
        />
      )}
      {post ? (
        <div className="flex flex-col space-y-6">
          <p className="font-sans font-bold text-16 text-darkBlue leading-32">
            {name}
          </p>
          <p className="font-sans text-14 text-darkBlue leading-32">{post}</p>
        </div>
      ) : (
        <p className="font-sans text-16 text-black leading-28">{name}</p>
      )}
    </div>
  );
};

export default userCard;
