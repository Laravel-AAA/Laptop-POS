import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconButton } from "@material-tailwind/react/components/IconButton";
import { Link } from "@inertiajs/react";
import { ILaravelPaginate } from "@/types";
import { HTMLAttributes, StyleHTMLAttributes } from "react";

export default function Pagination({
  paginateItems,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  paginateItems: ILaravelPaginate<any>;
}) {
  return (
    <>
      {paginateItems.links.length > 3 && (
        <div
          {...props}
          className={"flex justify-center pb-10 " + className}
        >
          <Link
            href={paginateItems.prev_page_url ?? ""}
            as={paginateItems.prev_page_url ? "a" : "span"}
            preserveState={true}
          >
            <IconButton
              disabled={!paginateItems.prev_page_url}
              variant="outlined"
              className="rounded-r-none border-r-0"
            >
              <FaArrowLeft strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </Link>

          {paginateItems.links
            .filter((v) => Number.isInteger(Number(v.label))) //remove Previous/Next links
            .map((v) => (
              <Link key={v.label} href={v.url as string} preserveState={true}>
                <IconButton
                  variant="outlined"
                  className={
                    "rounded-none border-r-0 text-base " +
                    (v.active ? "bg-primary-800 text-gray-100" : "")
                  }
                >
                  {v.label}
                </IconButton>
              </Link>
            ))}

          <Link
            href={paginateItems.next_page_url ?? ""}
            as={paginateItems.prev_page_url ? "a" : "span"}
            preserveState={true}
          >
            <IconButton
              disabled={!paginateItems.next_page_url}
              variant="outlined"
              className="rounded-l-none"
            >
              <FaArrowRight strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </Link>
        </div>
      )}
    </>
  );
}
