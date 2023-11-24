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
    <span
      title={moment(date).format('LLLL')}
      className={className}
    >
      {moment(date).fromNow()}
    </span>
  );
}
