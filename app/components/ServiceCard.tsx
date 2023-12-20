import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: Props) => {
  return (
    <div className="flex flex-col w-300 md:mx-20 lg:mx-50 pb-82">
      <Image
        src={image}
        alt="service img"
        width={300}
        height={354}
        style={{ height: "auto" }}
      />
      <span className="font-sans text-black text-24 leading-36 mt-24">
        {title}
      </span>
      <p className="font-sans text-grey text-20 leading-32 mt-12">
        {description}
      </p>
      <div className="flex items-center space-x-12 cursor-pointer w-fit border-b-[1px] border-darkBlue pb-1 mt-28">
        <span className="font-sans font-bold text-darkBlue text-20 leading-36">
          Explore page
        </span>
        <Image
          src="/arrow-right.svg"
          alt="arrow"
          width={24}
          height={26}
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
