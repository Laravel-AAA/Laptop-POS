import moment from "moment";
import React from "react";

export default function FromDate({
  date,
  className = "",
}: {
  date: string;
  className?: string;
}) {
  return <span className={className}>{moment(date).fromNow()}</span>;
}
