import React, { HTMLAttributes } from "react";

export default function ErrorMessage({
  message,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message: string | undefined }) {
  return (
    message && (
      <p
        {...props}
        className={"ml-2 mt-2 text-xs text-danger-600 " + className}
      >
        {message}
      </p>
    )
  );
}
