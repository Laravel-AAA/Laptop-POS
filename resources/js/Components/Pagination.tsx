import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconButton } from "@material-tailwind/react/components/IconButton";
import { Link } from "@inertiajs/react";
import { ILaravelPaginate } from "@/types";

export default function Pagination({
  paginateItems,
}: {
  paginateItems: ILaravelPaginate<any>;
}) {

  return (
    <div className="flex justify-center pb-10">
        <Link
          href={paginateItems.prev_page_url ?? ""}
          disabled={!paginateItems.prev_page_url}
        >
          <IconButton disabled={!paginateItems.prev_page_url} variant="outlined" className="rounded-r-none border-r-0">
            <FaArrowLeft strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </Link>

        {paginateItems.links
          .filter((v) => Number.isInteger(Number(v.label))) //remove Previous/Next links
          .map((v) => (
            <Link key={v.label} href={v.url as string}>
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
          disabled={!paginateItems.next_page_url}

        >
          <IconButton disabled={!paginateItems.next_page_url} variant="outlined" className="rounded-l-none">
          <FaArrowRight strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </Link>
    </div>
  );
}
