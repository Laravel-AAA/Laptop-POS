import { ButtonHTMLAttributes } from "react";

export default function DangerButton({
  className = "",
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `letter-space inline-block cursor-pointer items-center rounded-md
        border border-transparent bg-red-600 px-4
        py-2 text-center text-xs font-semibold uppercase text-white
        duration-200 ease-in-out
        hover:bg-red-500 focus:outline-none
        focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-gray-500 focus-visible:ring-offset-2
        active:scale-95 active:bg-red-700 disabled:opacity-25 ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
