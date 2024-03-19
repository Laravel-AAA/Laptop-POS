import { ReactNode } from "react";
import { FaExclamationTriangle, FaInfo } from "react-icons/fa";
import TemplateModal, { IModalButtons } from "./TemplateModal";
import { useTranslation } from "react-i18next";
interface IAlertModal {
  icon?: "info" | "danger";
  buttons?: IModalButtons[];
  title: string;
  paragraph: string | ReactNode;
}
export default function AlertModal({
  icon,
  buttons,
  title,
  paragraph,
  isOpen,
  requestClose,
}: IAlertModal & {
  isOpen: boolean;
  requestClose: (clickedButtonText?: string) => any;
}) {
  let templateIcon: ReactNode | null = null;
  if (icon === "danger") {
    templateIcon = (
      <FaExclamationTriangle
        className=" h-6 w-6 text-red-600"
        aria-hidden="true"
      />
    );
  } else if (icon === "info") {
    templateIcon = (
      <FaInfo className=" h-6 w-6 text-blue-600" aria-hidden="true" />
    );
  }

  const { t } = useTranslation();
  return (
    <TemplateModal
      title={t(title)}
      buttons={buttons}
      open={isOpen}
      closeModal={(clickedButtonText) => requestClose(clickedButtonText)}
      icon={
        templateIcon && (
          <div className="mx-auto mb-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            {templateIcon}
          </div>
        )
      }
    >
      <h1 className="text-sm text-gray-600">
        {typeof paragraph === "string" ? t(paragraph) : paragraph}
      </h1>
    </TemplateModal>
  );
}
