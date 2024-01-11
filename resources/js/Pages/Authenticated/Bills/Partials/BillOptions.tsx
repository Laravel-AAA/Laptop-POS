import Dropdown from "@/Components/Dropdown";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaList, FaTrashAlt } from "react-icons/fa";
import { IBill, IUser } from "@/types";
import DeleteConfirmBillModal from "@/Components/Modals/CreateEdit/BillModal/DeleteConfirmBillModal";
import { FaPrint } from "react-icons/fa6";

export default function BillOptions({
  bill,
  user,
}: {
  bill: IBill;
  user: IUser;
}) {
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    useState<boolean>(false);

  return (
    <div className="text-center  ">
      <Dropdown>
        <Dropdown.Trigger>
          <div className="inline-block rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none">
            <BsThreeDotsVertical className="text-lg" />
          </div>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <Dropdown.Link href={route("bill.show", bill.id)}>
            <div className="flex items-center gap-3">
              <FaList className="text-base text-gray-800" /> View
            </div>
          </Dropdown.Link>
          <Dropdown.Link
            href={route("bill.show", [bill.id, { print: "true" }])}
          >
            <div className="flex items-center gap-3">
              <FaPrint className="text-base text-gray-800" /> Print
            </div>
          </Dropdown.Link>

          <Dropdown.Link
            disabled={
              !(
                bill.createdBy_id == user.id ||
                user.role == "Owner" ||
                user.role == "Maintainer"
              )
            }
            href={route("bill.edit", bill.id)}
          >
            <div className="flex items-center gap-3">
              <FaEdit className="text-base text-gray-800" /> Edit
            </div>
          </Dropdown.Link>

          <Dropdown.Button
            disabled={
              !(
                bill.createdBy_id == user.id ||
                user.role == "Owner" ||
                user.role == "Maintainer"
              )
            }
            onClick={() => setOpenConfirmDeleteModal(true)}
          >
            <div className="flex items-center gap-3 text-danger-600">
              <FaTrashAlt className="text-base" /> Delete
            </div>
          </Dropdown.Button>
        </Dropdown.Content>
      </Dropdown>

      <DeleteConfirmBillModal
        key="billsBillOptionsDeleteConfirmBill"
        bill={bill}
        isOpen={openConfirmDeleteModal}
        requestClose={() => setOpenConfirmDeleteModal(false)}
      />
    </div>
  );
}
