import React from "react";
import { useTranslation } from "react-i18next";
import { ID_LENGTH } from "./Constant";
/**
 *
 * @returns last segment of an id that of type ulid
 * Ex: 01hc6txz6ahhx9x84219f2nbtk => 19f2nbtk
 * NOTE: BILL PAGE ON `/bill/{bill}` EXCEPT AT LEAST 8 CHARACTER ID LENGTH
 */
export default function ID({ id }: { id: string }) {
  const { t } = useTranslation();
  return (
    <span
      title={"#" + id}
      className="flex-nowrap whitespace-nowrap font-semibold italic tracking-wide"
    >
      #{id?.substring(26 - ID_LENGTH) ?? t("N/A")}
      {/* ulid is 26 length. 26-18=8 */}
    </span>
  );
}
