import { AuthPageProps, IBill } from "@/types";
import BillOptions from "./BillOptions";
import FromDate from "@/Utilities/FromDate";
import Num from "@/Utilities/Num";
import ID from "@/Utilities/ID";
import { PropsWithChildren, useMemo, useState } from "react";
import { usePage } from "@inertiajs/react";
import { Tooltip } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
type PropsProduct = {
  bill: IBill;
};
export default function Product({ bill }: PropsProduct) {
  const auth = usePage<AuthPageProps>().props.auth;
  const taxPercent = auth.business.taxPercent;
  const loggedInId = auth.user.id;

  const subTotalPrice = useMemo(
    () =>
      bill.bill_details.reduce(
        (v, t) => v + (t.product.price ?? 0) * t.quantity,
        0,
      ),
    [bill.bill_details],
  );
  const totalPrice = subTotalPrice * (1 + taxPercent);

  const [isCopy, setCopy] = useState<boolean>(false);

  const { t } = useTranslation();

  return (
    <tr className="even:bg-blue-gray-50/50">
      <TD>
        <Tooltip content={t(isCopy ? "Copied" : "Copy")}>
          <button
            className="dev-style"
            onClick={() => {
              navigator.clipboard.writeText(bill.id).then(() => setCopy(true));
            }}
          >
            <ID id={bill.id} />
          </button>
        </Tooltip>
      </TD>
      <TD>
        {bill.createdBy_id === loggedInId ? (
          <span className="select-none text-gray-600">You</span>
        ) : (
          bill.created_by?.name ?? t("N/A")
        )}
      </TD>
      <TD>
        <FromDate date={bill.created_at} />
      </TD>
      <TD>
        <Num
          className="text-secondary-700"
          showCurrency
          amount={subTotalPrice}
        />
      </TD>
      <TD>
        <Num className="text-primary-700" showCurrency amount={totalPrice} />
      </TD>
      <TD>
        <Num
          className={bill.cashReceived === null ? "text-primary-700" : ""}
          showCurrency
          amount={bill.cashReceived}
          noAmount={t("Digital Payment")}
        />
      </TD>
      <TD>
        <Num
          className="text-indigo-700"
          showCurrency
          amount={bill.cashReceived ? bill.cashReceived - totalPrice : null}
          noAmount=""
        />
      </TD>
      <TD>
        <Num amount={bill.bill_details.reduce((v, t) => v + t.quantity, 0)} />
      </TD>
      <td>
        <BillOptions bill={bill} user={auth.user} />
      </td>
    </tr>
  );
}

function TD({
  children,
  className = "", //You ain't gonna need it
}: PropsWithChildren<{ className?: string }>) {
  return (
    <td className="p-3">
      <p className="text-sm font-normal text-blue-gray-800">{children}</p>
    </td>
  );
}
