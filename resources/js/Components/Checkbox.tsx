import {
  CheckboxProps,
  Checkbox as MaterialCheckbox,
} from "@material-tailwind/react";
import { HTMLAttributes, ReactNode } from "react";
import ErrorMessage from "./Inputs/ErrorMessage";

export default function Checkbox({
  color = "teal",
  iconProps = { color: "teal", className: "bg-teal-500" },
  ref,
  errorMsg,
  errorMsgProps,
  labelProps = { className: "text-sm text-blue-gray-400 font-normal" },
  ...props
}: CheckboxProps & {
  label: ReactNode;
  errorMsg: string | undefined;
  errorMsgProps?: HTMLAttributes<HTMLParagraphElement>;
  disabled: boolean;
}) {
  return (
    <>
      <MaterialCheckbox
        iconProps={iconProps}
        labelProps={labelProps}
        color={color}
        {...props}
        crossOrigin={undefined}
      />

      <ErrorMessage
        className="ml-4 mt-0"
        message={errorMsg}
        {...errorMsgProps}
      />
    </>
  );
}
