import { Typography } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

export default function P({ children }: PropsWithChildren) {
  return <Typography variant="paragraph" className="text-gray-700">{children}</Typography>;
}