import Dropdown from "@/Components/Dropdown";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBars, FaEdit, FaTrashAlt } from "react-icons/fa";
import { IProduct } from "@/types";
import DeleteConfirmProductModal from "@/Components/Modals/CreateEdit/ProductModal/DeleteConfirmProductModal";

export default function ProductOptions({
  requestEdit,
  requestShow,
  product,
}: {
  product: IProduct;
  requestEdit: () => void;
  requestShow: () => void;
}) {
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    useState<boolean>(false);
  return (
    <div className="absolute right-2 top-2 hidden group-hover:block">
      <Dropdown>
        <Dropdown.Trigger>
          <span className="inline-flex">
            <button
              type="button"
              className="over:text-black inline-flex items-center rounded-full border
              border-transparent bg-white bg-opacity-60 p-2  leading-4 text-gray-700 shadow
              transition duration-200 ease-in-out hover:bg-opacity-70 hover:text-gray-900  hover:shadow-md
              active:scale-95"
            >
              <BsThreeDotsVertical className="text-xl" />
            </button>
          </span>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <button
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
          </button>
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

      <DeleteConfirmProductModal
        product={product}
        isOpen={openConfirmDeleteModal}
        requestClose={() => setOpenConfirmDeleteModal(false)}
      />
    </div>
  );
}
