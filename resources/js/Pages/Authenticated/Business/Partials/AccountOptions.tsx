import Dropdown from "@/Components/Dropdown";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { AuthPageProps, IUser } from "@/types";
import DeleteConfirmAccountModal from "@/Components/Modals/CreateEdit/AccountModal/DeleteConfirmAccountModal";
import { Link, usePage } from "@inertiajs/react";
import { FaUserMinus } from "react-icons/fa6";

export default function AccountOptions({
  account,
  requestEdit,
}: {
  account: IUser;
  requestEdit: () => void;
}) {
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    useState<boolean>(false);

  const loggedInId = usePage<AuthPageProps>().props.auth.user.id;

  return (
    <div className="text-center ">
      <Dropdown>
        <Dropdown.Trigger>
          <button
            type="button"
            className="rounded-[50%] p-2  align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none"
          >
            <BsThreeDotsVertical className="text-lg" />
          </button>
        </Dropdown.Trigger>

        <Dropdown.Content>
          {/* <button
            onClick={() => requestShow()}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <FaBars className="text-base" /> View
            </div>
          </button> */}
          {account.id !== loggedInId && (
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
              className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              href={route("profile.edit")}
            >
              <div className="flex items-center gap-3">
                <FaUserEdit className="text-base text-gray-900" /> Edit
              </div>
            </Link>
          )}

          <button
            disabled={account.id === loggedInId}
            onClick={() => setOpenConfirmDeleteModal(true)}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:hover:bg-white"
          >
            <div className="flex items-center gap-3 text-danger-600">
              <FaUserMinus className="text-base" /> Delete
            </div>
          </button>
        </Dropdown.Content>
      </Dropdown>

      <DeleteConfirmAccountModal
        account={account}
        isOpen={openConfirmDeleteModal}
        requestClose={() => setOpenConfirmDeleteModal(false)}
      />
    </div>
  );
}
