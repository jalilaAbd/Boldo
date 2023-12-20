"use client";
import React from "react";

interface Props {
  label: string;
  type?: "normal" | "small" | "transparent";
  bgColor?: string;
  fontColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

const button = ({
  label,
  type = "normal",
  bgColor,
  fontColor,
  borderColor,
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center w-fit ${
        type === "small"
          ? "px-40 h-40 bg-white rounded-24"
          : type === "transparent"
          ? `${
              borderColor ? `border-${borderColor}` : `border-white`
            } px-56 h-60 border-2 border-solid rounded-56`
          : `${bgColor ? `bg-${bgColor}` : `bg-green`} px-56 h-60 rounded-56`
      }`}
      onClick={() => onClick()}
    >
      <span
        className={`${
          (type === "transparent" && !borderColor) || fontColor === "white"
            ? "text-white"
            : "text-darkBlue"
        } font-sans font-bold ${
          type === "small" ? "text-16 leading-24" : "text-20 leading-28"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default button;
