import { Tooltip } from "@material-tailwind/react";
import moment from "moment";
import React from "react";

export default function FromDate({
  date,
  className = "",
}: {
  date: string;
  className?: string;
}) {
  return (
    <span className={className}>
      <Tooltip content={moment(date).format("LLLL")}>
        {moment(date).fromNow()}
      </Tooltip>
    </span>
  );
}
