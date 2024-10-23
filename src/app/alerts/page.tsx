import Alert from "@/components/Alert";
import React from "react";

interface AlertInterfaceProps {
  bg: string;
  text: string;
  title: string;
  border?: string;
}

const ALERTS: AlertInterfaceProps[] = [
  {
    bg: "bg-blue-500",
    text: "text-blue-600",
    title: "Primary",
  },
  {
    bg: "bg-blue-500",
    text: "text-blue-600",
    title: "Primary",
  },
  {
    bg: "bg-cyan-400",
    text: "text-cyan-500",
    title: "Secondary",
  },
  {
    bg: "bg-teal-400",
    text: "text-teal-500",
    title: "Success",
  },
  {
    bg: "bg-yellow-400",
    text: "text-yellow-500",
    title: "Warning",
  },
  {
    bg: "bg-red-400",
    text: "text-red-500",
    title: "Danger",
  },
  {
    bg: "bg-blue-200",
    text: "text-blue-300",
    title: "Info",
  },
  {
    bg: "bg-gray-100",
    text: "text-gray-600",
    title: "Light",
    border: "border-gray-400",
  },
  {
    bg: "bg-gray-500",
    text: "text-gray-700",
    title: "Dark",
    border: "border-gray-400",
  },
];
export default function Alerts() {
  return (
    <>
      <main className="h-full overflow-y-auto  max-w-full pt-4">
        <div className="container full-container py-5 flex flex-col gap-6">
          <div className="card">
            <div className="card-body flex flex-col gap-6">
              <h6 className="text-lg text-gray-600 font-semibold">Alerts</h6>
              <div className="card">
                <div className="card-body flex flex-col gap-3">
                  {ALERTS.map((alert, index) => (
                    <Alert
                      key={index}
                      bg={alert?.bg}
                      text={alert?.text}
                      title={alert?.title}
                      border={alert?.border}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Main Content End */}
      {/*end of project*/}
    </>
  );
}
