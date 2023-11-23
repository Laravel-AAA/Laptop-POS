import { Typography } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

export function H1({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Typography variant="h1" className={"text-gray-900 mb-1 " + className}>
      {children}
    </Typography>
  );
}
