import { ButtonHTMLAttributes } from "react";

export default function DangerButton({
  type = "button",
  className = "",
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      {...props}
      className={
        `inline-block cursor-pointer items-center rounded-md
        border border-transparent bg-danger-600 px-4
        py-2 text-center text-xs font-semibold uppercase text-white
        duration-200 ease-in-out
        hover:bg-danger-500 focus:outline-none
        focus:ring-2 focus:ring-danger-300 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-danger-300 focus-visible:ring-offset-2
        active:scale-95 active:bg-danger-700 disabled:opacity-25 ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
