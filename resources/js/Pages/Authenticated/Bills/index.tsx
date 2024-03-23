import { Card } from "@material-tailwind/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AuthPageProps, IBill, IFilterBill, ILaravelPaginate } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { HTMLAttributes, PropsWithChildren } from "react";
import { BsSearch } from "react-icons/bs";
import Bill from "./Partials/Bill";
import Pagination from "@/Components/Pagination";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import BillsHeader from "./Partials/BillsHeader";
import { useTranslation } from "react-i18next";

export default function Bills({
  auth,
  bills: paginateBills,
}: AuthPageProps<{
  bills: ILaravelPaginate<IBill>;
  filter: IFilterBill;
}>) {
  const bills: IBill[] = paginateBills.data;

  const { t } = useTranslation();
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<BillsHeader totalResult={paginateBills.total} />}
    >
      <Head title={t("Bills")} />
      <div className="flex min-h-[75vh] flex-col justify-between">
        {/* Overflow classes will set the position to relative, and this cause a problem
      when rendering the dropdown content, it will render inside the table so
      last item will not be shown because dropdown content is display below the
      item and that is outside the table */}
        <div className="mx-auto w-full overflow-x-auto overflow-y-hidden pb-36 pt-6 md:w-11/12 ">
          <Card
            className="w-full min-w-fit rounded-md"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <table className="table-auto text-left">
              <thead>
                <tr>
                  <TH className="rounded-tl-md">{t("ID")}</TH>
                  <TH>{t("Created By")}</TH>
                  <TH title={t("Created Before")}>{t("Date")}</TH>
                  <TH title={t("Sub total price (tax is NOT included)")}>
                    {t("Sub total")}
                  </TH>
                  <TH title={t("Total price (tax is included)")}>
                    {t("Total price")}
                  </TH>
                  <TH>{t("Received")}</TH>
                  <TH>{t("Remaining")}</TH>
                  <TH>{t("Total Quantity")}</TH>
                  <TH
                    title={t("Bill options")}
                    className="max-w-fit rounded-tr-md"
                  >
                    {/* Options button */}
                  </TH>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <Bill key={bill.id} bill={bill} />
                ))}
              </tbody>
            </table>
            {bills.length === 0 && (
              <div className="my-12 flex justify-center gap-4 opacity-50">
                <BsSearch className="mt-1" />
                <p>{t("No bills found!")}</p>
              </div>
            )}
          </Card>
        </div>
        <Pagination className="-mt-20" paginateItems={paginateBills} />
        <Footer />
      </div>
    </AuthenticatedLayout>
  );
}

function TH({
  className = "",
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<{ className?: string }>>) {
  return (
    <th
      {...props}
      className={
        "border-b border-blue-gray-100 bg-blue-gray-50 p-4 " + className
      }
    >
      <p className="text-sm font-semibold leading-none tracking-wide text-black opacity-90">
        {children}
      </p>
    </th>
  );
}
