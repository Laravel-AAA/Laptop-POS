import { ButtonHTMLAttributes } from "react";

export default function SecondaryMaterialBtn({
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
        `text-stone inline-block items-center rounded-md
        border border-blue-gray-100 bg-white
        px-4 py-2  text-center text-xs
        font-semibold uppercase
        tracking-wide  transition duration-200
        ease-in-out hover:bg-blue-gray-50 focus:outline-none
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
