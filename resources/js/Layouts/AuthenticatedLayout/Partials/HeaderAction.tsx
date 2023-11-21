import { ReactNode } from "react";
import { ROUTES } from "..";

export default function HeaderAction({
  header,
}: {
  header?: ReactNode | string;
}) {
  return (
    <header className="my-0 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {typeof header === "string" ? (
          <h2 className="py-5 text-xl font-semibold leading-tight text-gray-800">
            {header}
          </h2>
        ) : (
          header ?? ""
        )}
      </div>
    </header>
  );
}
