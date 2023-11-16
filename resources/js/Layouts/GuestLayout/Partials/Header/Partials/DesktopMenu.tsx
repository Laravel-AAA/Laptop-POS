import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import TextLink from "@/Components/TextLink";
import { FaArrowRight } from "react-icons/fa";

export default function DesktopMenu() {
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
