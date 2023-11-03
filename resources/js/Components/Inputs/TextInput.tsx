import { Input, InputProps } from "@material-tailwind/react";
import {
  HTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import ErrorMessage from "./ErrorMessage";

export default forwardRef(function TextInput(
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
    ...props
  }: InputProps & {
    isSelect?: boolean;
    label: string;
    required: boolean;
    errorMsg: string | undefined;
    errorMsgProps?: HTMLAttributes<HTMLParagraphElement>;
    hideError:boolean | undefined;
  },
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
    if (hideError == true) error = false;
    else if (errorMsg) error = true;
    else error = false;
  }
  return (
    <>
      <Input
        {...props}
        ref={localRef}
        type={type}
        variant={variant}
        color={color}
        size={size}
        error={error}
        className={className + ` focus:ring-0`}
        crossOrigin={undefined}
      />
      {/* //   `placeholder:text-slate-400 rounded-md border  border-gray-300 shadow-sm
      //   file:mr-3 file:cursor-pointer file:rounded-md
      //     file:rounded-e-none file:border file:border-transparent file:bg-primary-700 file:px-4
      //   file:py-[0.69rem] file:text-center file:text-xs
      //   file:font-semibold file:uppercase file:tracking-widest file:text-white
      //   file:transition file:duration-200 file:ease-in-out
      //   placeholder:italic file:hover:bg-primary-600
      //   focus:border-primary-600 focus:ring-primary-600 file:active:scale-95
      //     disabled:opacity-60 ` + */}
      <ErrorMessage message={errorMsg} {...errorMsgProps} />
    </>
  );
});
