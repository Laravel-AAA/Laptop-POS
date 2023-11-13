import Dropdown from "@/Components/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserEdit, FaUserTimes } from "react-icons/fa";
import { AuthPageProps, IUser } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { FaUserCheck, FaUserMinus } from "react-icons/fa6";
import BetterLink from "@/Components/Buttons/BetterLink";

export default function AccountOptions({
  account,
  requestEdit,
  requestOpenDeleteModal,
}: {
  account: IUser;
  requestEdit: () => void;
  requestOpenDeleteModal:()=>void;
}) {

  const loggedInId = usePage<AuthPageProps>().props.auth.user.id;

  return (
    <div className="text-center ">
      <Dropdown>
        <Dropdown.Trigger>
          <div
            className="rounded-[50%] p-2  align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none"
          >
            <BsThreeDotsVertical className="text-lg" />
          </div>
        </Dropdown.Trigger>

        <Dropdown.Content>
          {account.id !== loggedInId && !account.deleted_at && (
            <button
              onClick={() => requestEdit()}
              className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <FaUserEdit className="text-base text-gray-900" /> Edit
              </div>
            </button>
          )}

          {account.id === loggedInId && (
            <Link
              className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:hover:bg-white"
              href={route("profile.edit")}
            >
              <div className="flex items-center gap-3">
                <FaUserEdit className="text-base text-gray-900" /> Edit
              </div>
            </Link>
          )}

          {!account.deleted_at && (
            <BetterLink
              disabled={account.id === loggedInId}
              className={
                "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none  " +
                (account.id === loggedInId ? "opacity-50 hover:bg-white" : "")
              }
              href={route("account.destroy", account.id)}
              method="delete"
              as="button"
              preserveScroll={true}
              preserveState={false}
            >
              <div className="flex items-center gap-3 text-danger-600">
                <FaUserMinus className="text-base" /> Delete
              </div>
            </BetterLink>
          )}

          {account.deleted_at && (
            <BetterLink
              disabled={account.id === loggedInId}
              className={
                "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none  " +
                (account.id === loggedInId ? "opacity-50 hover:bg-white" : "")
              }
              href={route("account.restore", account.id)}
              method="post"
              as="button"
              preserveScroll={true}
              preserveState={false}
            >
              <div className="flex items-center gap-3">
                <FaUserCheck className="text-base text-gray-900" /> Restore
              </div>
            </BetterLink>
          )}

          {account.deleted_at && (
            <button
              disabled={account.id === loggedInId}
              onClick={() => requestOpenDeleteModal()}
              className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:hover:bg-white"
            >
              <div className="flex items-center gap-3 text-danger-600">
                <FaUserTimes className="text-base" /> Delete Permanently
              </div>
            </button>
          )}

        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
