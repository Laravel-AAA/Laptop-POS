import { IUser } from "@/types";
import FromDate from "@/Utilities/FromDate";
import { PropsWithChildren } from "react";
import AccountOptions from "./AccountOptions";

export default function AccountRow({
  account,
  requestEdit,
  requestOpenDeleteModal,
}: {
  account: IUser;
  requestEdit: () => void;
  requestOpenDeleteModal: (account: IUser) => void;
}) {
  return (
    <tr className="even:bg-blue-gray-50/50">
      <TD>{account.name}</TD>
      <TD>{account.email}</TD>
      <TD>{account.role}</TD>
      <TD>
        {account.deleted_at ? (
          <span
            title="Deleted account cannot access the system"
            className="rounded-full bg-danger-200 p-1 px-2 text-danger-800"
          >
            Deleted
          </span>
        ) : account.email_verified_at ? (
          <span
            title="Verified account can access the system"
            className="rounded-full bg-green-100 p-1 px-2 text-green-800"
          >
            Verified
          </span>
        ) : (
          <span
            title="Unverified account cannot access the system"
            className="rounded-full bg-yellow-100 p-1 px-2 text-yellow-900"
          >
            Unverified
          </span>
        )}
      </TD>
      <TD>
        <FromDate date={account.created_at} />
      </TD>
      <td>
        <AccountOptions
          requestOpenDeleteModal={() => requestOpenDeleteModal(account)}
          account={account}
          requestEdit={() => requestEdit()}
        />
      </td>
    </tr>
  );
}

function TD({
  children,
  className = "", //You ain't gonna need it
}: PropsWithChildren<{ className?: string }>) {
  return (
    <td className="p-3">
      <p className="text-sm font-normal text-blue-gray-800">{children}</p>
    </td>
  );
}
