import { ButtonHTMLAttributes } from "react";

export default function PrimaryMaterialBtn({
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
        `bg-stone-800 hover:bg-stone-700 inline-block items-center
        rounded-md border border-transparent
        px-4 py-2  text-center text-xs
        font-semibold uppercase
        tracking-wide text-white transition
        duration-200 ease-in-out focus:outline-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
        focus-visible:ring-offset-2 active:scale-95
        disabled:opacity-25 disabled:active:scale-100 ${
          disabled ? "cursor-default opacity-25" : "cursor-pointer"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
