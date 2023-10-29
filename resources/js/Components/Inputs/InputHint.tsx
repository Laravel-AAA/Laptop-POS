import { HTMLAttributes  } from "react";

export default function InputHint({
  message, //use either message or children NOT both
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
  if (!message) return null;
  else if (typeof message === "object") return message;
  else
    return (
      <p {...props} className={"text-sm text-gray-600 " + className}>
        {message ? message : children}
      </p>
    );
}
