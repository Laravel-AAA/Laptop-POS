import { HTMLAttributes } from "react";

export default function HintMessage({
  message, //use either message or children NOT both
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
  if (!message) return null;
  else if (typeof message === "object") return message;
  else
    return (
      <p {...props} className={"ml-2 mt-2 text-xs text-blue-gray-400 " + className}>
        {message ? message : children}
      </p>
    );
}
