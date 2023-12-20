"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: Props) => {
  const [state, setstate] = useState(false);
  const handleAccordion = () => {
    setstate(!state);
  };
  return (
    <div className="flex flex-col border-b border-[#C4C4C4]">
      <div className="flex justify-between w-full pb-4 ">
        <p className="font-sans text-20 leading-32">{title}</p>
        <Image
          className={`${state && "rotate-180"} cursor-pointer`}
          src="/down.svg"
          alt="down arrow"
          width={19}
          height={19}
          onClick={() => handleAccordion()}
          style={{ height: "auto" }}
        />
      </div>
      {!!state && (
        <p className="font-sans text-16 leading-24 py-4 border-t border-[#C4C4C4]">
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
