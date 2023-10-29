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
    isSelect = false,
    ...props
  }: InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean;
    isSelect?: boolean;
  },
  ref,
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
    select: () => localRef.current?.select(),
  }));

  useEffect(() => {
    if (isFocused === true) {
      localRef.current?.focus();
    }
    if (isSelect === true) {
      localRef.current?.select();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={
        `placeholder:text-slate-400 rounded-md border  border-gray-300 shadow-sm
        file:mr-3 file:cursor-pointer file:rounded-md
          file:rounded-e-none file:border file:border-transparent file:bg-primary-700 file:px-4
        file:py-[0.69rem] file:text-center file:text-xs
        file:font-semibold file:uppercase file:tracking-widest file:text-white
        file:transition file:duration-200 file:ease-in-out
        placeholder:italic file:hover:bg-primary-600
        focus:border-primary-600 focus:ring-primary-600 file:active:scale-95
          disabled:opacity-60 ` + className
      }
      ref={localRef}
    />
  );
});
