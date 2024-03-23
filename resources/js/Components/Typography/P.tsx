import { Typography } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

export default function P({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Typography
      variant="paragraph"
      className={"text-gray-700 " + className}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </Typography>
  );
}
