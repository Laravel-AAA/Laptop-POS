import {
  Input as MaterialInput,
  InputProps as MaterialInputProps,
} from "@material-tailwind/react";
import { HTMLAttributes, ReactNode, forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import HintMessage from "./HintMessage";
export type InputProps = MaterialInputProps & {
  label: string;
  type: MaterialInputProps["type"];
  required: boolean;
  errorMsg: string | undefined;
  errorMsgProps?: HTMLAttributes<HTMLParagraphElement>;
  hideError: boolean | undefined;
  hint?: string | ReactNode;
  hintProps?: HTMLAttributes<HTMLParagraphElement>;
  disabled: boolean;
};

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    type = "text",
    color = "teal",
    variant = "outlined",
    size = "lg",
    className = "",
    errorMsg,
    errorMsgProps,
    hideError,
    error,
    hint,
    hintProps,
    label,
    disabled,
    required,
    autoComplete = "off",
    //replace first character with empty string,
    //and any non word character with dash. Ex: '$ item price' => 'item-price'
    id = label
      .toLowerCase()
      .replace(/^[^\w]+/, "")
      .replaceAll(/[^\w]/g, "-"),
    name = label
      .toLowerCase()
      .replace(/^[^\w]+/, "")
      .replaceAll(/[^\w]/g, "-"),
    ...props
  },
  ref,
) {
  if (error === undefined) {
    if (hideError === true) error = false;
    else if (errorMsg) error = true;
    else error = false;
  }

  return (
    <>
      <MaterialInput
        {...props}
        id={id}
        name={name}
        label={label}
        aria-label={label}
        inputRef={ref}
        ref={null}
        type={type}
        variant={variant}
        color={color}
        size={size}
        error={error}
        autoComplete={autoComplete}
        //   `placeholder:text-slate-400 rounded-md border  border-gray-300 shadow-sm
        //   file:mr-3 file:cursor-pointer file:rounded-md
        //     file:rounded-e-none file:border file:border-transparent file:bg-primary-700 file:px-4
        //   file:py-[0.69rem] file:text-center file:text-xs
        //   file:font-semibold file:uppercase file:tracking-widest file:text-white
        //   file:transition file:duration-200 file:ease-in-out
        //   placeholder:italic file:hover:bg-primary-600
        //   focus:border-primary-600 focus:ring-primary-600 file:active:scale-95
        //     disabled:opacity-60 ` +
        className={`${className} file:mr-2 file:cursor-pointer file:rounded-md file:border-none
        file:bg-white file:p-1 file:pb-0 file:text-center file:text-sm
        file:font-semibold file:uppercase  file:text-primary-700
        file:transition file:duration-200 file:ease-in-out placeholder:italic
        focus:ring-0
        file:active:scale-95 file:disabled:opacity-60`}
        disabled={disabled}
        required={disabled === true ? false : required} //remove the red star of required input when disabled.
        crossOrigin={undefined}
      />
      <ErrorMessage message={errorMsg} {...errorMsgProps} />
      {typeof hint === "string" ? (
        <HintMessage message={hint} {...hintProps} />
      ) : (
        <HintMessage>{hint}</HintMessage>
      )}
    </>
  );
});
