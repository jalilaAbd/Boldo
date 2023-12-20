import React from "react";

interface Props {
  content: string;
  color?: string;
}

const text = ({ content, color }: Props) => {
  return (
    <p className="text-white text-16 font-sans leading-28 mt-15">{content}</p>
  );
};

export default text;
