import { ButtonHTMLAttributes } from "react";

export default function TertiaryButton({
  type = "button",
  className = "",
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
   <button
      {...props}
      type={type}
      className={
        `inline-block cursor-pointer items-center rounded-md border
        border-transparent bg-indigo-700 px-4
        py-2 text-center  text-xs font-semibold
        uppercase tracking-widest
        text-white transition
        duration-200 ease-in-out hover:bg-indigo-600 focus:outline-none  focus:ring-2
        focus:ring-indigo-300 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-indigo-300 focus-visible:ring-offset-2
         active:scale-95 disabled:opacity-25 ${disabled && "opacity-25"} ` +
        className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}