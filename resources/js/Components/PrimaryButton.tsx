import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
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
        border border-transparent bg-gray-800
        px-4 py-2  text-center text-xs
        font-semibold uppercase
        tracking-widest text-white
        transition duration-200 ease-in-out hover:bg-gray-700 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-gray-500
        focus-visible:ring-offset-2 active:scale-95 disabled:opacity-25 ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
