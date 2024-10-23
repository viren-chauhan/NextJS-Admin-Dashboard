import React from "react";

interface TextInputInterfaceProps {
  type: string;
  id: string;
  style?: string;
  placeholder?: string | null;
  ariaDescribedby?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  type,
  id,
  style,
  placeholder,
  ariaDescribedby,
  disabled,
  onChange,
}: TextInputInterfaceProps) {
  return (
    <input
      type={type}
      id={id}
      className={`block border-gray-200 text-sm focus:border-blue-600 focus:ring-0 ${
        style && style
      }`}
      placeholder={placeholder ? placeholder : ""}
      aria-describedby={ariaDescribedby}
      disabled={disabled ? disabled : false}
      onChange={onChange ? onChange : (e) => console.log(e.target.value)}
    />
  );
}
