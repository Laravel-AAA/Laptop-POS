import { Typography } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

export function H1({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Typography
      variant="h1"
      className={"mb-1 font-extrabold text-gray-900 " + className}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </Typography>
  );
}
