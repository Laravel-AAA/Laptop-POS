import React from "react";

export default function AppName({
  className = "",
  laptopClassName = "",
  POSClassName = "",
}: {
  className?: string;
  laptopClassName?: string;
  POSClassName?: string;
}) {
  return (
    <>
      <span
        className={
          "font-semibold text-gray-800 " + className + " " + laptopClassName
        }
      >
        Laptop
      </span>
      {/*narrow space*/}
      &#8239;
      <span
        className={
          "font-semibold text-primary-700 " + className + " " + POSClassName
        }
      >
        POS
      </span>
    </>
  );
}
