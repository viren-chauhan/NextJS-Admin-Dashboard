import React from "react";

interface TextInputInterfaceProps {
  id: string;
  name: string;
  role: string;
  projectName: string | null;
  priority: string;
  budget: string;
}

export default function Transaction({
  id,
  name,
  role,
  projectName,
  priority,
  budget,
}: TextInputInterfaceProps) {
  return (
    <tr>
      <td className="p-4 font-semibold text-gray-600 ">{id}</td>
      <td className="p-4">
        <div className="flex flex-col gap-1">
          <h3 className=" font-semibold text-gray-600">{name}</h3>
          <span className="font-normal text-gray-500">{role}</span>
        </div>
      </td>
      <td className="p-4">
        <span className="font-normal  text-gray-500">{projectName}</span>
      </td>
      <td className="p-4">
        <span
          className={`inline-flex items-center py-[3px] px-[10px] rounded-2xl font-semibold ${
            priority == "Low"
              ? "bg-blue-600"
              : priority == "Medium"
              ? "bg-cyan-500"
              : priority == "High"
              ? "bg-red-500"
              : "bg-teal-500"
          } text-white`}
        >
          {priority}
        </span>
      </td>
      <td className="p-4">
        <span className="font-semibold text-base text-gray-600">${budget}</span>
      </td>
    </tr>
  );
}
