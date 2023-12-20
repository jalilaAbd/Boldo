import React from "react";
import Image from "next/image";
import User from "./UserCard";

interface Props {
  image: string;
  title: string;
  date: string;
  description: string;
  avatar: string;
  userName: string;
}

const CategoryCard = ({
  image,
  title,
  description,
  date,
  avatar,
  userName,
}: Props) => {
  return (
    <div className="flex flex-col w-300 mx-20 mb-40 md:mb-85">
      <Image
        src={image}
        alt="service img"
        width={300}
        height={209}
        style={{ height: "auto" }}
      />
      <div className="flex space-x-12">
        <p className="font-sans font-bold text-darkBlue text-16 leading-28 mt-24">
          {title}
        </p>
        <p className="font-sans text-grey text-16 leading-28 mt-24">{date}</p>
      </div>
      <p className="font-sans text-black text-20 leading-32 h-[100px] mt-12">
        {description}
      </p>
      <User avatar={avatar} name={userName} />
    </div>
  );
};

export default CategoryCard;
