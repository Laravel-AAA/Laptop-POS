import Dropdown from "@/Components/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserEdit, FaUserTimes } from "react-icons/fa";
import { AuthPageProps, IUser } from "@/types";
import { usePage } from "@inertiajs/react";
import { FaUserCheck, FaUserMinus } from "react-icons/fa6";

export default function AccountOptions({
  account,
  requestEdit,
  requestOpenDeleteModal,
}: {
  account: IUser;
  requestEdit: () => void;
  requestOpenDeleteModal: () => void;
}) {
  const loggedInId = usePage<AuthPageProps>().props.auth.user.id;

  return (
    <div className="text-center ">
      <Dropdown>
        <Dropdown.Trigger>
          <div className="inline-block rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none">
            <BsThreeDotsVertical className="text-lg" />
          </div>
        </Dropdown.Trigger>

        <Dropdown.Content>
          {account.id !== loggedInId && !account.deleted_at && (
            <Dropdown.Button onClick={() => requestEdit()}>
              <div className="flex items-center gap-3">
                <FaUserEdit className="text-base text-gray-900" /> Edit
              </div>
            </Dropdown.Button>
          )}

          {account.id === loggedInId && (
            <Dropdown.Link href={route("profile.edit")}>
              <div className="flex items-center gap-3">
                <FaUserEdit className="text-base text-gray-900" /> Edit
              </div>
            </Dropdown.Link>
          )}

          {!account.deleted_at && (
            <Dropdown.Link
              disabled={account.id === loggedInId}
              href={route("account.destroy", account.id)}
              method="delete"
              as="button"
              preserveScroll={true}
              preserveState={false}
            >
              <div className="flex items-center gap-3 text-danger-600">
                <FaUserMinus className="text-base" /> Soft Delete
              </div>
            </Dropdown.Link>
          )}

          {account.deleted_at && (
            <Dropdown.Link
              disabled={account.id === loggedInId}
              href={route("account.restore", account.id)}
              method="post"
              as="button"
              preserveScroll={true}
              preserveState={false}
            >
              <div className="flex items-center gap-3">
                <FaUserCheck className="text-base text-gray-900" /> Restore
              </div>
            </Dropdown.Link>
          )}

          {account.deleted_at && (
            <Dropdown.Button
              disabled={account.id === loggedInId}
              onClick={() => requestOpenDeleteModal()}
            >
              <div className="flex items-center gap-3 text-danger-600">
                <FaUserTimes className="text-base" /> Delete Permanently
              </div>
            </Dropdown.Button>
          )}
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
