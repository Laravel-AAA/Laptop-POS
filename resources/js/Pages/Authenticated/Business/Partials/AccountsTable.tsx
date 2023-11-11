import {
  HTMLAttributes,
  PropsWithChildren,
  useState,
} from "react";
import { IBusiness, IModalAction, IUser } from "@/types";
import AccountRow from "./AccountRow";
import CreateEditAccountModal from "@/Components/Modals/CreateEdit/AccountModal/CreateEditAccountModal";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import { FaUserPlus } from "react-icons/fa6";

export default function AccountsTable({
  business,
}: {
  business: IBusiness & { users: IUser[] };
}) {
  const [modalAction, setModalAction] = useState<IModalAction<IUser>>({
    state: "create",
    open: false,
    data: null,
  });

  return (
    <section className="bg-white p-4 pb-0 shadow sm:rounded-lg sm:p-8 sm:pb-0">
      <CreateEditAccountModal
        modalAction={modalAction}
        setModalAction={setModalAction}
      />

      <header>
        <h2 className="text-lg font-medium text-gray-900">Accounts</h2>

        <div className="flex">
          <p className="text-normal mt-1 grow text-gray-600">
            Add, remove, or change an account's role in your business.
          </p>
          <SecondaryButton
            className="!mx-2 flex gap-2 xl:!mr-10 "
            onClick={() =>
              setModalAction({ open: true, state: "create", data: null })
            }
          >
            <FaUserPlus className="w-4" />
            Create New Account
          </SecondaryButton>
        </div>
      </header>

      <div className="mt-6 space-y-6">
        <div>
          <div className="mx-auto w-full overflow-x-auto overflow-y-hidden pb-28 xl:px-10 ">
            <div className="min-w-fit rounded-md border">
              <table className="w-full table-auto  text-left">
                <thead>
                  <tr>
                    <TH className="rounded-tl-md">Name</TH>
                    <TH>Email</TH>
                    <TH>Role</TH>
                    <TH title="Either verified or unverified. Verified account can access the system. Unverified can not">
                      State
                    </TH>
                    <TH title="Created date">Date</TH>
                    <TH title="Account options" className="rounded-tr-md ">
                      {/* Options button */}
                    </TH>
                  </tr>
                </thead>
                <tbody>
                  {business.users.map((account) => (
                    <AccountRow
                      key={account.id}
                      account={account}
                      requestEdit={() =>
                        setModalAction(() => ({
                          state: "edit",
                          data: account,
                          open: true,
                        }))
                      }
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TH({
  className = "",
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<{ className?: string }>>) {
  return (
    <th
      {...props}
      className={
        "min-w-fit border-b border-blue-gray-100 bg-blue-gray-50 p-4 " +
        className
      }
    >
      <p className="text-sm font-semibold leading-none tracking-wide text-black opacity-90">
        {children}
      </p>
    </th>
  );
}
