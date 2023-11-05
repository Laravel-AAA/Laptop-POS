import {
  CheckboxProps,
  Checkbox as MaterialCheckbox,
} from "@material-tailwind/react";
import { HTMLAttributes, ReactNode } from "react";
import ErrorMessage from "./Inputs/ErrorMessage";

export default function Checkbox({
  className = "",
  color = "teal",
  iconProps = { color: "teal" },
  ref,
  errorMsg,
  errorMsgProps,
  disabled,
  ...props
}: CheckboxProps & {
  label:ReactNode;
  errorMsg: string | undefined;
  errorMsgProps?: HTMLAttributes<HTMLParagraphElement>;
  disabled: boolean;
}) {
  return (
    <>
      <MaterialCheckbox
        iconProps={iconProps}
        color={color}
        disabled={disabled}
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
