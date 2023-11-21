import { PropsWithChildren } from "react";

export default function H1({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-3 mt-6 text-3xl font-semibold text-gray-900">
      {children}
    </h1>
  );
}