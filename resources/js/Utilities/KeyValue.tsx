import React, { ReactNode } from "react";

export default function KeyValue({
  k: key,
  v: value,
  className = "",
  keyClassName = "",
  valueClassName = "",
  title = "",
  noColon=false,
}: {
  k: string;
  className?: string;
  keyClassName?: string;
  valueClassName?: string;
  title?: string;
  v?: ReactNode | string | null | undefined;
  noColon?:boolean
}) {
  return (
    <p className={className}>
      <span className={"text-blue-gray-500 " + keyClassName}>{key}</span>{!noColon&&':'}&nbsp;
      <span className={"text-gray-800 " + valueClassName} title={title}>
        {value??'N/A'}
      </span>
    </p>
  );
}
