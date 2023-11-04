import { Select, SelectProps } from "@material-tailwind/react";
import { HTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

export default function SelectInput({
  children,
  ref, //typescript shit. ref will be ignored if passed to SelectInput
  color = "red",
  size = "lg",
  variant = "outlined",
  errorMsg,
  errorMsgProps,
  error,
  hideError,
  //There is no such required on Select :|
  required,
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
        {...props}
        //This is because of a bug when using tab it dose not focus on Select element.
        onFocus={(e) => e.nativeEvent.relatedTarget && e.target.click()}
        variant={variant}
        color={color}
        size={size}
        error={error}
      >
        {children}
      </Select>
      <ErrorMessage message={errorMsg} {...errorMsgProps} />
    </>
  );
}
