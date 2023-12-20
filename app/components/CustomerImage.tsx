import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  graph: string;
}

const customerImage = ({ image, graph }: Props) => {
  return (
    <div className="relative mb-120 md:mx-25 lg:mx-75">
      <Image
        src={image}
        alt="customer"
        width={494}
        height={506}
        style={{ height: "auto" }}
      />
      <Image
        className="absolute -bottom-[104px] right-[57px]"
        src={graph}
        alt="graph"
        width={251}
        height={388}
        style={{ height: "auto" }}
      />
    </div>
  );
};

export default customerImage;
