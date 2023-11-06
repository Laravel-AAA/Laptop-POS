import {
  Input as MaterialInput,
  InputProps as MaterialInputProps,
} from "@material-tailwind/react";
import {
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import ErrorMessage from "./ErrorMessage";
import HintMessage from "./HintMessage";
export type InputProps = MaterialInputProps & {
  isSelect?: boolean;
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

export default forwardRef(function Input(
  {
    type = "text",
    isSelect = false,
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
    id = label.toLowerCase().replaceAll(/[^\w]/g, "-"), //replace any non word character with dash
    name = label.toLowerCase().replaceAll(/[^\w]/g, "-"),
    ...props
  }: InputProps,
  ref,
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    // focus: () => {
    //   localRef.current?.focus();
    // },
    select: () => {
      localRef.current?.select();
    },
  }));

  useEffect(() => {
    if (localRef.current) {
      // if (isFocused === true) {
      //   localRef.current.focus();
      // }
      if (isSelect === true) {
        localRef.current.select();
      }
    }
  }, []);

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
        ref={localRef}
        type={type}
        variant={variant}
        color={color}
        size={size}
        error={error}
        //   `placeholder:text-slate-400 rounded-md border  border-gray-300 shadow-sm
        //   file:mr-3 file:cursor-pointer file:rounded-md
        //     file:rounded-e-none file:border file:border-transparent file:bg-primary-700 file:px-4
        //   file:py-[0.69rem] file:text-center file:text-xs
        //   file:font-semibold file:uppercase file:tracking-widest file:text-white
        //   file:transition file:duration-200 file:ease-in-out
        //   placeholder:italic file:hover:bg-primary-600
        //   focus:border-primary-600 focus:ring-primary-600 file:active:scale-95
        //     disabled:opacity-60 ` +
        className={
          className +
          ` file:mr-2 file:cursor-pointer file:rounded-md file:border-none
        file:bg-white file:p-1 file:pb-0 file:text-center file:text-sm
        file:font-semibold file:uppercase  file:text-primary-700
        file:transition file:duration-200 file:ease-in-out placeholder:italic
        focus:ring-0
        file:active:scale-95 file:disabled:opacity-60`
        }
        disabled={disabled}
        required={disabled === true ? false : required} //remove the red star of required when disabled.
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
