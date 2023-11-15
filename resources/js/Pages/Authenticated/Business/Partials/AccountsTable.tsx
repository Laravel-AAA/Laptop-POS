import { HTMLAttributes, PropsWithChildren, useState } from "react";
import { IBusiness, IModalAction, IUser } from "@/types";
import AccountRow from "./AccountRow";
import CreateEditAccountModal from "@/Components/Modals/CreateEdit/AccountModal/CreateEditAccountModal";
import { FaUserPlus } from "react-icons/fa6";
import PermanentDeleteConfirmAccountModal from "@/Components/Modals/CreateEdit/AccountModal/PermanentDeleteConfirmAccountModal";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";

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

  const [deleteModal, setDeleteModal] = useState<
    { open: true; account: IUser } | { open: false; account?: IUser }
  >({ open: false });

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
            Add, remove, or edit an account in your business.
          </p>
          <PrimaryMaterialBtn
            className="!mx-2 flex gap-2 xl:!mr-10 "
            onClick={() =>
              setModalAction({ open: true, state: "create", data: null })
            }
          >
            <FaUserPlus className="w-4" />
            Create New Account
          </PrimaryMaterialBtn>
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
                    <TH title="Only verified accounts can access the system">
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
                      requestOpenDeleteModal={(account) =>
                        setDeleteModal({ open: true, account: account })
                      }
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
      <PermanentDeleteConfirmAccountModal
        account={deleteModal.account as IUser}
        isOpen={deleteModal.open}
        requestClose={() => setDeleteModal(p=>( {...p, open: false } ))}
      />
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
