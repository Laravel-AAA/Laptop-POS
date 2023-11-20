import { BsImage } from "react-icons/bs";

export default function DefaultProductImg({
  className = "",
}: {
  className?: string;
}) {
  return (
    <BsImage
      className={"mx-auto mt-4 h-auto w-24 text-gray-900 " + className}
    />
  );
}
