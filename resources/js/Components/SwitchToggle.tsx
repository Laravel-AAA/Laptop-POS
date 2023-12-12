import { Switch, SwitchProps } from "@material-tailwind/react";
import React from "react";
import PrimaryLink from "./Buttons/PrimaryLink";

export default function SwitchToggle({
  color = "amber",
  className = "",
  ref,
  ...props
}: SwitchProps) {
  return (
    <Switch
      crossOrigin={undefined}
      color={color}
      ripple={false}
      containerProps={{
        className: "w-11 h-6 before:!content-none after:!content-none !bg-amber-500",
      }}
      circleProps={{
        className: "left-0.5 before:!content-none after:!content-none bg-transparent hidden",
      }}
      labelProps={{className:'before:!content-none after:!content-none hidden !bg-transparent'}}
      className={`h-full w-full before:!content-none after:!content-none bg-transparent hover:checked:bg-amber-500 focus:!ring-transparent  focus:checked:bg-amber-500 disabled:opacity-25  ${className}`}
      {...props}
    />
  );
}
