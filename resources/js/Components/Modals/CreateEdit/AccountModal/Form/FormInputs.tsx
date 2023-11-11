import Input from "@/Components/Inputs/Input";
import {
  AuthPageProps,
  ICreateProduct,
  ICreateUser,
  IModalAction,
  IProduct,
  IUser,
} from "@/types";
import Checkbox from "@/Components/Checkbox";
import { useState } from "react";
import Num from "@/Utilities/Num";
import { usePage } from "@inertiajs/react";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import TextArea from "@/Components/Inputs/TextArea";
import RoleSelector from "./RoleSelector";

export default function FormInputs({
  form,
  modalAction,
}: {
  form: UseBetterForm<ICreateUser | IUser>;
  modalAction: IModalAction<IUser>;
}) {
  return (
    <div className="space-y-4">
      <Input
        id="name"
        label="Name"
        name="name"
        type="text"
        value={form.data.name ?? undefined}
        className="mt-1 block w-full"
        autoComplete="off"
        autoFocus
        disabled={modalAction.state === "show" || form.processing}
        onChange={(e) => form.setData("name", e.target.value)}
        required
        errorMsg={form.errors.name}
        hideError={form.isDirty("name")}
      />

      <Input
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="off"
        value={form.data.email}
        className="mt-1 block w-full"
        disabled={form.processing}
        onChange={(e) => {
          form.setData("email", e.target.value);
        }}
        errorMsg={form.errors.email}
        hideError={form.isDirty("email")}
        required={true}
        hint={<span>An invitation link will be sent to this email</span>}
      />

      <Input
        label="Initial Password"
        type="password"
        name="password"
        value={form.data.password}
        errorMsg={form.errors.password || form.errors.password_confirmation}
        hideError={
          form.isDirty("password") || form.isDirty("password_confirmation")
        }
        disabled={form.processing}
        className="mt-1 block w-full"
        autoComplete="new-password"
        onChange={(e) => {
          form.setData("password", e.target.value);
          form.setData("password_confirmation", e.target.value);
        }}
        required
      />

      <RoleSelector form={form} />
    </div>
  );
}
