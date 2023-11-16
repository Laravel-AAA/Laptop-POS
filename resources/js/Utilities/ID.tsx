import React from "react";
/**
 *
 * @returns last segment of an id that of type ulid
 * Ex: 01hc6txz6ahhx9x84219f2nbtk => f2nbtk
 */
export default function ID({ id }: { id: string }) {
  return (
    <span className="flex-nowrap whitespace-nowrap font-semibold italic tracking-wide">
      #{id?.substring(18) ?? "NULL"}
    </span>
  );
}
