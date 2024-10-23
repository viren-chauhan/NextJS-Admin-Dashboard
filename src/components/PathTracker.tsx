import React from "react";

interface PathTrackerInterfaceProps {
  time: string;
  event: string;
  detail?: string;
  color: string;
}
export default function PathTracker({
  time,
  event,
  detail,
  color,
}: PathTrackerInterfaceProps) {
  return (
    <li className="timeline-item flex relative overflow-hidden min-h-[70px]">
      <div className="timeline-time text-gray-600 text-sm min-w-[90px] py-[6px] pr-4 text-end">
        {time}
      </div>
      <div className="timeline-badge-wrap flex flex-col items-center ">
        <div
          className={`timeline-badge w-3 h-3 rounded-full shrink-0 bg-transparent border-2 ${
            color ? color : "border-blue-600"
          } my-[10px]`}
        ></div>
        <div className="timeline-badge-border block h-full w-[1px] bg-gray-100" />
      </div>
      <div className="timeline-desc py-[6px] px-4 text-sm">
        <p className="text-gray-600 text-sm font-normal">{event}</p>
        <a href="javascript:void('')" className="text-blue-600">
          {detail && detail}
        </a>
      </div>
    </li>
  );
}
