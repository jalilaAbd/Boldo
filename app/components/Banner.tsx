import React from "react";
import Image from "next/image";
import Header from "./Header";
import Title from "./Title";
import Text from "./Text";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center w-full max-w-full h-fit px-20 sm:px-40 xl:px-100 py-50 bg-darkBlue">
      <div className="absolute z-0 right-0 top-0 w-300 md:w-[600px] h-300 md:h-[600px] rounded-bl-full bg-blue" />
      <Header />
      <div className="z-10 flex flex-wrap justify-center md:flex-nowrap md:justify-between w-full h-fit mt-64">
        <div className="flex flex-col items-center md:items-start max-w-500 md:max-w-fit md:w-[calc(50%-50px)] xl:w-[570px] mb-40">
          <Title label="Save time by building fast with Boldo Template" />
          <Text content="Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure." />
          <div className="flex justify-center flex-wrap md:flex-nowrap mt-40">
            <div className="mb-20 mr-24">
              <Button label="Buy template" />
            </div>
            <Button label="Explore" type="transparent" />
          </div>
        </div>
        <div className="flex flex-col max-w-fit md:w-[calc(50%-50px)]">
          <Image
            src="/chart1.png"
            width={494}
            height={232}
            alt="chart 1"
            style={{ height: "auto" }}
          />
          <div className="flex justify-between mt-25">
            <Image
              src="/chart3.png"
              width={193}
              height={166}
              alt="chart 3"
              style={{ objectFit: "contain", height: "auto" }}
            />
            <Image
              src="/chart2.png"
              width={262}
              height={165}
              alt="chart 2"
              style={{ objectFit: "contain", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
