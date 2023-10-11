import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  InputHTMLAttributes,
} from "react";

export default forwardRef(function TextInput(
  {
    type = "text",
    className = "",
    isFocused = false,
    ...props
  }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
  ref,
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={
        `rounded-md border-gray-300 border  shadow-sm placeholder:italic
        placeholder:text-slate-400 focus:border-primary-600 focus:ring-primary-600
          file:rounded-md file:rounded-e-none file:border disabled:opacity-60 file:cursor-pointer
        file:border-transparent file:bg-primary-700 file:px-4
        file:py-[0.69rem] file:text-center file:text-xs file:font-semibold
        file:uppercase file:tracking-widest file:mr-3
        file:text-white file:transition
        file:duration-200 file:ease-in-out file:hover:bg-primary-600
         file:active:scale-95  ` +
        className
      }
      ref={localRef}
    />
  );
});
