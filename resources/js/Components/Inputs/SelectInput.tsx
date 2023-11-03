import { Select, SelectProps } from "@material-tailwind/react";
import { HTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

export default function SelectInput({
  children,
  ref, //typescript shit. ref will be ignored if passed to SelectInput
  color = "red",
  size = "lg",
  variant = "outlined",
  className = "",
  errorMsg,
  errorMsgProps,
  error,
  hideError,
  ...props
}: SelectProps & {
  label: string;
  required: boolean;
  errorMsg: string | undefined;
  errorMsgProps?: HTMLAttributes<HTMLParagraphElement>;
  hideError: boolean | undefined;
}) {
  if (error === undefined) {
    if (hideError == true) error = false;
    else if (errorMsg) error = true;
    else error = false;
  }
  return (
    <>
      <Select variant={variant} color={color} size={size} error={error} {...props}>
        {children}
      </Select>
      <ErrorMessage message={errorMsg} {...errorMsgProps} />
    </>
  );
}
