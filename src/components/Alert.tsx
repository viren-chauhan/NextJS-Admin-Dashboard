import React from "react";

interface AlertInterfaceProps {
  bg: string;
  text: string;
  title: string;
  border?: string;
}

export default function Alert({
  bg,
  text,
  title,
  border,
}: AlertInterfaceProps) {
  return (
    <div
      className={`border text-sm rounded-md p-4 ${bg && bg} ${text && text} ${
        border && border
      }`}
      role="alert"
    >
      <span className="font-bold">{title}</span> alert! You should check in on
      some of those fields below.
    </div>
  );
}
