import { ReactNode } from "react";

export type HeaderActionProps = { header: ReactNode | string | null };

export default function HeaderAction({ header }: HeaderActionProps) {
  return (
    <header className="my-0 print:hidden bg-white shadow">
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
