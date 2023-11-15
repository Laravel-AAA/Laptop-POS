import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import Dropdown from "@/Components/Dropdown";
import TextLink from "@/Components/TextLink";
import { ROUTES } from "@/Layouts/AuthenticatedLayout";
import { FaArrowRight } from "react-icons/fa";
import { GuestPageProps } from "@/types";

export default function DesktopMenu({ auth }: GuestPageProps) {
  return (
    <nav className="hidden md:flex md:grow">
      <ul className="flex grow flex-wrap items-center justify-end">
        <li>
          <TextLink href={route("login")}>Login</TextLink>
        </li>
        <li>
          <PrimaryLink
            className="ml-5 flex normal-case"
            href={route("register")}
          >
            <span>Register&nbsp;</span>
            <FaArrowRight />
          </PrimaryLink>
        </li>
      </ul>
    </nav>
  );
}
