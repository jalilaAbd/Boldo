"use client";
import React, { useEffect, useReducer, useState, useRef } from "react";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  const menuItems = [
    { label: "Product" },
    { label: "Services" },
    { label: "About" },
  ];
  const [width, setWidth] = useState(0);
  const [open, toggle] = useReducer((open) => !open, false);
  const menuRef = useRef(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="relative z-20 flex justify-between w-full">
      <Image
        src="/logo.svg"
        width={162}
        height={42}
        alt="boldo logo"
        style={{ height: "auto" }}
      />
      {width < 640 ? (
        <>
          <Image
            src="/menu.svg"
            width={60}
            height={60}
            alt="menu"
            onClick={() => toggle()}
            style={{ height: "auto" }}
          />
          {!!open && (
            <div className="absolute top-[80px] flex flex-col w-full bg-darkBlue divide-y divide-white drop-shadow-lg">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="flex justify-center items-center h-60"
                >
                  <span className="text-white text-20 font-semibold font-sans leading-28">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="grid gap-20 md:gap-40 grid-cols-[max-content_max-content] ml-40">
          <div className="grid gap-20 md:gap-40  grid-cols-[max-content_max-content_max-content]">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="flex justify-center items-center"
              >
                <span className="text-white text-16 font-semibold font-sans leading-28">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
          <Button label="Log In" type="small" />
        </div>
      )}
    </div>
  );
};

export default Header;
