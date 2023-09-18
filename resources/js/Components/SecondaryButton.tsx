import { ButtonHTMLAttributes } from "react";

export default function SecondaryButton({
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
        `letter-space inline-block cursor-pointer items-center rounded-md
                border border-gray-400 border-transparent bg-white px-4 py-2 text-center
                text-xs font-semibold
                uppercase tracking-widest
                text-gray-800 shadow-sm  transition
                duration-200 hover:bg-gray-50 focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2
                active:scale-95 disabled:opacity-25 ease-in-out${
                  disabled && "opacity-25"
                } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
