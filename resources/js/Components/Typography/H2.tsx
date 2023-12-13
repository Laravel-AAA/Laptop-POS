import { Typography } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

export function H2({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Typography variant="h2" className={"text-gray-900 font-extrabold mb-1 " + className}>
      {children}
    </Typography>
  );
}
