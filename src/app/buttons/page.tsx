"use client";
import Button from "@/components/Button";
import React from "react";

const BUTTON = [
  {
    btnName: "Primary",
    style:
      "py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-blue-600 hover:text-white border-blue-600 hover:border-blue-600 hover:bg-blue-600",
  },
  {
    btnName: "Secondary",
    style:
      "py-3 px-4 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-cyan-500 hover:text-white border-cyan-500 hover:border-cyan-500 hover:bg-cyan-500",
  },
  {
    btnName: "Success",
    style:
      "py-3 px-4 text-sm font-semibold text-white bg-teal-500 hover:bg-teal-600",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-teal-500 hover:text-white border-teal-500 hover:border-teal-500 hover:bg-teal-500",
  },
  {
    btnName: "Warning",
    style:
      "py-3 px-4 text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-yellow-500 hover:text-white border-yellow-500 hover:border-yellow-500 hover:bg-yellow-500",
  },
  {
    btnName: "Danger",
    style:
      "py-3 px-4 text-sm font-semibold text-white bg-red-500 hover:bg-red-600",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-red-500 hover:text-white border-red-500 hover:border-red-500 hover:bg-red-500",
  },
  {
    btnName: "Info",
    style:
      "py-3 px-4 text-sm font-semibold text-white bg-blue-300 hover:bg-blue-400",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-blue-300 hover:text-white border-blue-300 hover:border-blue-300 hover:bg-blue-300",
  },
  {
    btnName: "Dark",
    style:
      "py-3 px-4 text-sm font-semibold text-white bg-gray-600 hover:bg-gray-700",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-gray hover:text-white border-gray-700 hover:border-gray-700 hover:bg-gray-700",
  },
  {
    btnName: "Light",
    style: "py-3 px-4 text-sm font-semibold text-gray-600 hover:bg-gray-400",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-gray-200 hover:text-gray-500 border-gray-200 hover:border-transparent hover:bg-transparent",
  },
  {
    btnName: "Link",
    style: "py-3 px-4 text-sm font-semibold text-blue-600 hover:text-blue-700",
    outlineStyle:
      "py-3 px-4 text-sm font-semibold text-gray-500 hover:text-blue-600 border-transparent hover:border-transparent",
  },
];

export default function Buttons() {
  return (
    <>
      <main className="h-full overflow-y-auto  max-w-full w-full pt-4">
        <div className="container full-container py-5 flex flex-col gap-6">
          <div className="card">
            <div className="card-body flex flex-col gap-6">
              <h6 className="text-lg text-gray-600 font-semibold">Buttons</h6>
              <div className="card">
                <div className="card-body flex flex-wrap gap-3">
                  {BUTTON.map((btn, index) => (
                    <Button
                      btnName={btn?.btnName}
                      style={btn?.style}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <h6 className="text-lg text-heading font-semibold">
                Outline buttons
              </h6>
              <div className="card">
                <div className="card-body flex flex-wrap gap-3">
                  {BUTTON.map((btn, index) => (
                    <Button
                      key={index}
                      btnName={btn?.btnName}
                      outlineStyle={btn?.outlineStyle}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
