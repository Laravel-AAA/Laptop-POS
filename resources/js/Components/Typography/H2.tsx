import { PropsWithChildren } from "react";

export function H2({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-2 mt-4 text-xl font-semibold text-gray-800">
      {children}
    </h2>
  );
}