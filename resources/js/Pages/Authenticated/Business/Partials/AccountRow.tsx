import { IUser } from "@/types";
import FromDate from "@/Utilities/FromDate";
import { PropsWithChildren } from "react";
import AccountOptions from "./AccountOptions";
import { useTranslation } from "react-i18next";

export default function AccountRow({
  account,
  requestEdit,
  requestOpenDeleteModal,
}: {
  account: IUser;
  requestEdit: () => void;
  requestOpenDeleteModal: (account: IUser) => void;
}) {

  const { t } = useTranslation();
  return (
    <tr className="even:bg-blue-gray-50/50">
      <TD>{account.name}</TD>
      <TD>{account.email}</TD>
      <TD>{account.role}</TD>
      <TD>
        {account.deleted_at ? (
          <span
            title={ t( "Deleted account cannot access the system"  )}
            className="rounded-full bg-danger-200 p-1 px-2 text-danger-800"
          >
            { t( "Deleted" ) }
          </span>
        ) : account.email_verified_at ? (
          <span
            title={ t( "Verified account can access the system"  )}
            className="rounded-full bg-green-100 p-1 px-2 text-green-800"
          >
            { t( "Verified" ) }
          </span>
        ) : (
          <span
            title={ t( "Unverified account cannot access the system"  )}
            className="rounded-full bg-yellow-100 p-1 px-2 text-yellow-900"
          >
            { t( "Unverified" ) }
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
