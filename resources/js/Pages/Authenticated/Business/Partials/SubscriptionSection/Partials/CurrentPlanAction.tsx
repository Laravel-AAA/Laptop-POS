import Dropdown from "@/Components/Dropdown";
import { FaChevronDown } from "react-icons/fa6";

export default function CurrentPlanAction() {
  return (
    <Dropdown>
      <Dropdown.Trigger
        className="align-center flex w-full items-center justify-center
        rounded-md border border-none border-transparent
        bg-gradient-to-r from-gray-600
        to-gray-800 py-2 text-center
        text-base font-semibold
        uppercase normal-case tracking-wider
        text-white shadow transition
        duration-200 ease-in-out
        hover:bg-primary-600 hover:shadow-lg  focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 "
      >
        <span className="grow">Current Plan</span>
        <span className="mr-3">
          <FaChevronDown />
        </span>
      </Dropdown.Trigger>

      <Dropdown.Content width="w-full">
        <Dropdown.Link href={route("updatePaymentMethod")}>
          Update Payment Method
        </Dropdown.Link>
        <Dropdown.Link href={route("business.edit")}>Business</Dropdown.Link>
        <Dropdown.Link href={route("logout")}>Log Out</Dropdown.Link>
      </Dropdown.Content>
    </Dropdown>
  );
}
