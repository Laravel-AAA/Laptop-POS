import { Typography } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

export function H3({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Typography
      variant="h3"
      className={"mb-1 font-extrabold text-gray-900 " + className}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </Typography>
  );
}
