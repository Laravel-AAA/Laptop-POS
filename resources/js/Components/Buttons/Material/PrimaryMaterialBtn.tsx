import { Button, ButtonProps } from "@material-tailwind/react";
import React from "react";

export default function PrimaryMaterialBtn({
  children,
  color="teal",
  className="",
  ...props
}: ButtonProps) {
  return <Button className={`${className} `} color={color} {...props} ref={undefined}>{children}</Button>;
}
