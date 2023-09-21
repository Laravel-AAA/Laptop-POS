import {
  ReactNode,
  useRef,
} from "react";
import { FaExclamationTriangle, FaInfo } from "react-icons/fa";
import TemplateModal, { IModalButtons } from "./TemplateModal";
interface IAlertModal {
  icon?: "info" | "danger";
  buttons?: IModalButtons;
  title: string;
  paragraph: string;
}
export default function AlertModal({
  icon,
  buttons,
  title,
  paragraph,
  open,
  setOpen,
}: IAlertModal & {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const cancelButtonRef = useRef(null);
  let templateIcon: ReactNode | undefined = undefined;
  if (icon == "danger") {
    templateIcon = (
      <FaExclamationTriangle
        className=" h-6 w-6 text-red-600"
        aria-hidden="true"
      />
    );
  } else if (icon == "info") {
    templateIcon = (
      <FaInfo className=" h-6 w-6 text-blue-600" aria-hidden="true" />
    );
  }

  return (
    <TemplateModal
      title={title}
      buttons={buttons}
      open={open}
      setOpen={setOpen}
      icon={templateIcon &&
        <div className="mx-auto mb-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          {templateIcon}
        </div>
      }
    >
        <p className="text-sm text-gray-500">{paragraph}</p>
    </TemplateModal>
  );
}
