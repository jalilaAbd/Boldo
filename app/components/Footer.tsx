import React from "react";
import Image from "next/image";

const footer = () => {
  const footerList = [
    { title: "Landings", links: ["Home", "Products", "Services"] },
    { title: "Company", links: ["Home", "Careers", "Services"] },
    { title: "Resources", links: ["Blog", "Products", "Services"] },
  ];

  return (
    <div className="flex flex-col bg-white w-full h-fit p-20 md:p-40 lg:p-100">
      <div className="flex flex-wrap justify-between w-full h-fit">
        <div className="flex flex-col w-300 space-y-40 mb-40">
          <Image
            src="/logoBlue.svg"
            alt="logo"
            width={156}
            height={41}
            style={{ height: "auto" }}
          />
          <p className="w-full font-sans text-16 text-grey leading-28">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          {footerList.map((item) => (
            <div
              key={item.title}
              className="flex flex-col w-150 mb-40 space-y-24 md:space-y-40"
            >
              <p className="font-sans font-bold text-20 leading-32">
                {item.title}
              </p>
              {item.links.map((l, index) => (
                <p
                  key={index}
                  className="font-sans text-20 text-grey leading-32"
                >
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="font-sans text-16 text-grey leading-28">
        All rights reserved.
      </p>
    </div>
  );
};

export default footer;
