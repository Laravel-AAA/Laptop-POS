import { Option } from "@material-tailwind/react";
import React from "react";
import { IUser } from "@/types";
import SelectInput from "@/Components/Inputs/SelectInput";
import { UseBetterForm } from "@/Utilities/useBetterForm";

export default function CountryInput<T extends { role: IUser["role"] }>({
  form,
}: {
  form: UseBetterForm<T>;
}) {
  return (
    <SelectInput
      label="Role"
      value={form.data.role}
      errorMsg={form.errors.role}
      hideError={form.isDirty("role")}
      onChange={(v) => form.setData("role", (v as IUser["role"]) ?? "Cashier")}
      disabled={form.processing}
      required
      selected={(element) =>
        element &&
        React.cloneElement(element, {
          disabled: true,
          className:
            "flex items-center opacity-100 px-0 gap-2 group pointer-events-none",
        })
      }
    >
      {ROLES.map((r) => (
        <Option key={r.name} value={r.name} className="flex flex-col gap-1">
          {r.name}
          <span className={"text-xs text-blue-gray-300 group-[]:hidden"}>
            {r.desc}
          </span>
        </Option>
      ))}
    </SelectInput>
  );
}

export const ROLES: { name: IUser["role"]; desc: string }[] = [
  {
    name: "Cashier",
    desc: "Can perform checkout. Can edit or delete only the bills that they have created themselves.",
  },
  {
    name: "Maintainer",
    desc: "Can perform checkout. Can manage all bills and inventory.",
  },
  {
    name: "Owner",
    desc: "Have all Maintainer privileges. And manage accounts and business information.",
  },
];
