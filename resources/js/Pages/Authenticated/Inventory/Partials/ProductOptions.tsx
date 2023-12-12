import Dropdown from "@/Components/Dropdown";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBars, FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthPageProps, IProduct } from "@/types";
import DeleteConfirmProductModal from "@/Components/Modals/CreateEdit/ProductModal/DeleteConfirmProductModal";
import { usePage } from "@inertiajs/react";
import { FaBoxesStacked } from "react-icons/fa6";

export default function ProductOptions({
  requestEdit,
  requestShow,
  requestChangeStock,
  product,
}: {
  product: IProduct;
  requestEdit: () => void;
  requestShow: () => void;
  requestChangeStock: () => void;
}) {
  const user = usePage<AuthPageProps>().props.auth.user;
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    useState<boolean>(false);
  return (
    <div className="absolute right-2 top-2 hidden group-hover:block">
      <Dropdown>
        <Dropdown.Trigger>
          <span className="inline-flex">
            <div
              className="over:text-black inline-flex items-center rounded-full border
              border-transparent bg-white bg-opacity-60 p-2  leading-4 text-gray-700 shadow
              transition duration-200 ease-in-out hover:bg-opacity-70 hover:text-gray-900  hover:shadow-md
              active:scale-95"
            >
              <BsThreeDotsVertical className="text-xl" />
            </div>
          </span>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <Dropdown.Button
            onClick={(e) => {
              e.stopPropagation();
              requestShow();
            }}
          >
            <div className="flex items-center gap-3">
              <FaBars className="text-base" /> View
            </div>
          </Dropdown.Button>

          <Dropdown.Button
            disabled={
              !(
                product.createdBy_id == user.id ||
                user.role == "Owner" ||
                user.role == "Maintainer"
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              requestChangeStock();
            }}
          >
            <div className="flex items-center gap-3">
              <FaBoxesStacked className="text-base" /> Update Stock
            </div>
          </Dropdown.Button>

          <Dropdown.Button
            disabled={
              !(
                product.createdBy_id == user.id ||
                user.role == "Owner" ||
                user.role == "Maintainer"
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              requestEdit();
            }}
          >
            <div className="flex items-center gap-3">
              <FaEdit className="text-base" /> Edit
            </div>
          </Dropdown.Button>

          <Dropdown.Button
            disabled={
              !(
                product.createdBy_id == user.id ||
                user.role == "Owner" ||
                user.role == "Maintainer"
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              setOpenConfirmDeleteModal(true);
            }}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:bg-white"
          >
            <div className="flex items-center gap-3 text-danger-600">
              <FaTrashAlt className="text-base" /> Delete
            </div>
          </Dropdown.Button>
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
