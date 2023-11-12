import Input from "@/Components/Inputs/Input";
import { ICreateUser, IModalAction, IUser } from "@/types";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import RoleSelector from "./RoleSelector";
import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";

export default function FormInputs({
  form,
  modalAction,
}: {
  form: UseBetterForm<
    (ICreateUser | IUser) & { resendVerificationLink?: boolean }
  >;
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
        hint={
          <>
            {modalAction.state === "create" && (
              <span>An invitation link will be sent to this email</span>
            )}
            {modalAction.state === "edit" && (
              <span>
                Note: If you change the email address, the account owner will
                need to re-verify the new email address.
              </span>
            )}
          </>
        }
      />

      {modalAction.state === "edit" && form.isDirty("email") && (
        <Checkbox
          label={<span>Send new verification link.</span>}
          checked={form.data.resendVerificationLink}
          errorMsg={undefined}
          disabled={form.processing}
          onChange={(e) =>
            form.setData("resendVerificationLink", e.target.checked)
          }
        />
      )}

      {modalAction.state === "create" && (
        <Input
          label="Initial Password"
          type="password"
          name="password"
          value={form.data.password}
          errorMsg={form.errors.password}
          hideError={form.isDirty("password")}
          disabled={form.processing}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) => {
            form.setData("password", e.target.value);
          }}
          required
        />
      )}

      {/* <Input
        label="Confirm Password"
        type="password"
        name="password_confirmation"
        value={form.data.password_confirmation}
        errorMsg={form.errors.password_confirmation}
        hideError={form.isDirty("password_confirmation")}
        disabled={form.processing}
        className="mt-1 block w-full"
        autoComplete="new-password"
        onChange={(e) => form.setData("password_confirmation", e.target.value)}
        required
      /> */}
      <RoleSelector form={form} />
    </div>
  );
}
