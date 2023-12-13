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
            className="ml-5 flex normal-case group"
            href={route("register.method")}
          >
            <span>Register&nbsp;</span>
            <FaArrowRight className="group-hover:translate-x-1 transition"/>
          </PrimaryLink>
        </li>
      </ul>
    </nav>
  );
}
