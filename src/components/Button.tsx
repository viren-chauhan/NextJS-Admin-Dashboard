import React from "react";

interface ButtonInterfaceProps {
  btnName: string;
  style?: string;
  outlineStyle?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export default function Button({
  btnName,
  style,
  outlineStyle,
  disabled,
  onClick,
}: ButtonInterfaceProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-x-2 rounded-md border ${
        style && style
      } ${outlineStyle && outlineStyle}`}
      disabled={disabled ? disabled : false}
      onClick={onClick ? onClick : () => console.log("Button Clicked!")}
    >
      {btnName}
    </button>
  );
}
