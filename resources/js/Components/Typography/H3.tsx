import { Typography } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

export function H3({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Typography variant="h3" className={"text-gray-900 mb-1 " + className}>
      {children}
    </Typography>
  );
}
