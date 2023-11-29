import { Select, SelectProps } from "@material-tailwind/react";
import { HTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

export default function SelectInput({
  children,
  ref, //typescript shit. ref will be ignored if passed to SelectInput
  // color = "brown",
  size = "lg",
  variant = "outlined",
  errorMsg,
  errorMsgProps,
  error,
  hideError,
  //There is no such required on Select :|
  required,
  className ='',
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
      <Select
        className={`focus:outline-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
        focus-visible:ring-offset-2 ${className}`}
        onClick={e=>e.currentTarget.blur()}
        variant={variant}
        size={size}
        error={error}
        {...props}
      >
        {children}
      </Select>
      <ErrorMessage message={errorMsg} {...errorMsgProps} />
    </>
  );
}
