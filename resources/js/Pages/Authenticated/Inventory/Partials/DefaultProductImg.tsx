import {  FaBoxOpen } from "react-icons/fa6";

export default function DefaultProductImg({
  className = "",
}: {
  className?: string;
}) {
  return (
    <FaBoxOpen
      className={"mx-auto mt-4 h-auto w-16 text-gray-900 " + className}
    />
  );
}
