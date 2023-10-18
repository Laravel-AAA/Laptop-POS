import React from "react";
/**
 *
 * @returns last segment of an id that of type ulid
 * Ex: 01hc6txz6ahhx9x84219f2nbtk => f2nbtk
 */
export default function ID({ id }: { id: string }) {
  return (
    <span className="font-semibold italic tracking-wide">
      #{id?.substring(20) ?? "NULL"}
    </span>
  );
}
