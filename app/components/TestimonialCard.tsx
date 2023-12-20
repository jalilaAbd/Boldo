import React from "react";
import UserCard from "./UserCard";

type User = {
  avatar: string;
  name: string;
  post: string;
};

interface Props {
  testimonial: string;
  user: User;
}

function testimonialCard({ testimonial, user }: Props) {
  return (
    <div className="flex flex-col w-320 sm:w-350 h-fit rounded-12 shadow-medium bg-white mb-40 md:mx-12 p-22 sm:p-40">
      <p className="font-sans text-24 leading-36">{testimonial}</p>
      <UserCard avatar={user?.avatar} name={user?.name} post={user?.post} />
    </div>
  );
}

export default testimonialCard;
