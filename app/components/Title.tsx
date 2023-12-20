import React from "react";

interface Props {
  label: string;
  color?: string;
  size?: "normal" | "small";
  position?: "default" | "center";
}

const Title = ({ label, color, size, position }: Props) => {
  return (
    <div>
      <p
        className={`${color ? `text-${color}` : `text-white`}
            ${
              size === "small"
                ? "text-24 sm:text-36 leading-56"
                : "text-36 sm:text-48 leading-72"
            } ${position === "center" && "text-center"} font-manrope`}
      >
        {label}
      </p>
    </div>
  );
};

export default Title;
