import React, { ReactNode } from "react";
import { ROUTES } from "..";

export default function HeaderAction({header}:{header?:ReactNode}) {
  return (
    <header className="my-0 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {header || (
          <h2 className="py-5 text-xl font-semibold leading-tight text-gray-800">
            {ROUTES.find((r) => r.link == route().current())?.name ??
              route().current()?.toString()[0].toUpperCase() +
                (route()
                  .current()
                  ?.substring(1)
                  .toLowerCase()
                  .split(".")?.[0] ?? "")}
          </h2>
        )}
      </div>
    </header>
  );
}
