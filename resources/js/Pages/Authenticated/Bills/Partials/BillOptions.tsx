import Dropdown from "@/Components/Dropdown";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { IBill } from "@/types";
import DeleteConfirmBillModal from "@/Components/Modals/CreateEdit/BillModal/DeleteConfirmBillModal";

export default function BillOptions({
  requestEdit,
  requestShow,
  bill,
}: {
  bill: IBill;
  requestEdit: () => void;
  requestShow: () => void;
}) {
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    useState<boolean>(false);
  return (
    <div className="text-center  ">
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
          </button>
          <button
            onClick={() => requestEdit()}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <FaEdit className="text-base" /> Edit
            </div>
          </button> */}
          <button
            onClick={() => setOpenConfirmDeleteModal(true)}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center gap-3 text-danger-600">
              <FaTrashAlt className="text-base" /> Delete
            </div>
          </button>
        </Dropdown.Content>
      </Dropdown>

      <DeleteConfirmBillModal
        bill={bill}
        isOpen={openConfirmDeleteModal}
        requestClose={() => setOpenConfirmDeleteModal(false)}
      />
    </div>
  );
}
