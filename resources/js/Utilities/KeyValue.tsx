import React, { ReactNode } from "react";

export default function KeyValue({
  k: key,
  v: value,
  className = "",
  keyClassName = "",
  valueClassName = "",
  title = "",
}: {
  k: string;
  className?: string;
  keyClassName?: string;
  valueClassName?: string;
  title?: string;
  v?: ReactNode | string | null | undefined;
}) {
  return (
    <p className={className}>
      <span className={"text-blue-gray-500 " + keyClassName}>{key}</span>:&nbsp;
      <span className={"text-gray-800 " + valueClassName} title={title}>
        {value}
      </span>
    </p>
  );
}
