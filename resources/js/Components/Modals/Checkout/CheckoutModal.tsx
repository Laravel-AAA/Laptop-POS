import { AuthPageProps, IBill, ICreateBill } from "@/types";
import { AnchorHTMLAttributes, FormEvent, useRef } from "react";
import TemplateModal from "../TemplateModal";
import FormFields from "./Partials/FormFields";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import SecondaryMaterialBtn from "@/Components/Buttons/Material/SecondaryMaterialBtn";
import { router, usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function CheckoutModal({
  form,
  isShow,
  requestClose,
}: {
  form: UseBetterForm<ICreateBill | IBill>;
  isShow: boolean;
  requestClose: () => void;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  function printBillIfApplicable(billId: string) {
    const isApplicable = JSON.parse(
      localStorage.getItem("printOnSubmit") ?? "true",
    );
    if (isApplicable) {
      if (linkRef.current) {
        linkRef.current.href = route("bill.show", {
          bill: billId ?? "errorID",
          print: "true",
        });
        linkRef.current!.click();
      } else
        throw new Error(
          "Unexpected linkRef.current value. Got=" + linkRef.current,
        );
    }
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    form.post(route(`bill.store`), {
      preserveState: false,
      preserveScroll: false,
      onSuccess: (e) => {
        requestClose();
        form.clearErrors();
        form.reset();
        new Audio("/assets/Audio/checkout-21.mp3").play();
        printBillIfApplicable(e.props.createdUpdatedBillId);
      },
      onError: (e) => {
        console.error(e);
        if (e?.serverError) alert(e.serverError);
      },
    });
  }

  const { t } = useTranslation();
  return (
    <>
      <a hidden={true} target="_blank" ref={linkRef} href=""></a>
      <TemplateModal
        key="checkoutTemplateModal"
        title={t("Checkout")}
        open={isShow}
        closeModal={() => requestClose()}
      >
        <form className="mt-3" onSubmit={handleSubmit}>
          <FormFields form={form} />

          <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
            <PrimaryMaterialBtn type="submit" disabled={form.processing}>
              {t((form.data as IBill).id === undefined ? "Proceed" : "Update")}
            </PrimaryMaterialBtn>

            <SecondaryMaterialBtn
              type="button"
              onClick={() => {
                form.cancel();
                requestClose();
                form.clearErrors();
              }}
            >
              {t("Cancel")}
            </SecondaryMaterialBtn>
          </div>
        </form>
      </TemplateModal>
    </>
  );
}
