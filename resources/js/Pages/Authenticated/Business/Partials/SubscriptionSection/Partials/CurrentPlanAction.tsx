import Dropdown from "@/Components/Dropdown";
import { ISubscriptionLinks } from "@/types";
import { FaChevronDown } from "react-icons/fa6";

export default function CurrentPlanAction({
  requestShowPauseSubAlert,
  state,
}: {
  requestShowPauseSubAlert: () => any;
  state: ISubscriptionLinks["state"];
}) {
  return (
    <Dropdown>
      <Dropdown.Trigger
        className="flex w-full items-center justify-center rounded-md
        border border-none border-transparent bg-gradient-to-r
        from-gray-600 to-gray-800
        py-2 text-center align-middle
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
        {/* Looks like it just redirect me back to laptop-pos!
        * It MUST NOT be inertia's Link
          <a
      href={route("updatePaymentMethod")}
      className= "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:bg-white "

    >
          Update Payment Method
    </a> */}
        {state === "Recurring" && (
          <Dropdown.Button onClick={() => requestShowPauseSubAlert()}>
            Pause Subscription
          </Dropdown.Button>
        )}
        {state === "Grace Period" ||
          (state === "Paused" && (
            <Dropdown.Link href={route("subscription.resume")}>
              Resume
            </Dropdown.Link>
          ))}
      </Dropdown.Content>
    </Dropdown>
  );
}
