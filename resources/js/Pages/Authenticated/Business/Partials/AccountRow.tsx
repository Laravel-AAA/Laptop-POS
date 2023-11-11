import { IUser } from "@/types";
import FromDate from "@/Utilities/FromDate";
import { PropsWithChildren } from "react";
import AccountOptions from "./AccountOptions";

export default function AccountRow({
  account,
  requestEdit,
}: {
  account: IUser;
  requestEdit: () => void;
}) {

  return (
    <tr className="even:bg-blue-gray-50/50">
      <TD>{account.name}</TD>
      <TD>{account.email}</TD>
      <TD>{account.role}</TD>
      <TD>
        {account.email_verified_at ? (
          <span title="Verified account can access the system" className="rounded-full bg-green-100 p-1 px-2 text-green-800">
            Verified
          </span>
        ) : (
          <span title="Unverified account can not access the system" className="rounded-full bg-yellow-100 p-1 px-2 text-yellow-900">
            Unverified
          </span>
        )}
      </TD>
      <TD>
        <FromDate date={account.created_at} />
      </TD>
      <td>
        <AccountOptions account={account} requestEdit={() => requestEdit()} />
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
