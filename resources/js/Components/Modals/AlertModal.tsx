import { Fragment, PropsWithChildren, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaExclamationTriangle ,FaInfo,FaInfoCircle} from "react-icons/fa";
import TemplateModal from "./TemplateModal";
import DangerButton from "../DangerButton";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
interface IAlertModal {
  icon?: "info" | "danger";
  buttons?: {
    primary?: { text: string; action?: Function };
    danger?: { text: string; action?: Function };
    secondary?: { text: string; action?: Function };
  };
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
  return (
    <TemplateModal open={open} setOpen={setOpen}>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          {icon == "danger" && (
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <FaExclamationTriangle
                className=" h-6 w-6 text-red-600"
                aria-hidden="true"
              />
            </div>
          )}
          {icon == "info" && (
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <FaInfo
                className=" h-6 w-6 text-blue-600"
                aria-hidden="true"
              />
            </div>
          )}
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              {title}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
      {(buttons?.primary || buttons?.secondary || buttons?.danger) && (
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          {buttons?.danger && (
            <DangerButton
              className="w-full shadow sm:ml-3 sm:w-auto"
              onClick={() => {
                setOpen(false);
                buttons.danger?.action?.();
              }}
            >
              {buttons.danger.text}
            </DangerButton>
          )}
          {buttons?.primary && (
            <PrimaryButton
              className="w-full shadow sm:ml-3 sm:w-auto"
              onClick={() => {
                setOpen(false);
                buttons.primary?.action?.();
              }}
            >
              {buttons.primary.text}
            </PrimaryButton>
          )}
          {buttons?.secondary && (
            <SecondaryButton
              className="w-full shadow sm:ml-3 sm:w-auto"
              onClick={() => {
                setOpen(false);
                buttons.secondary?.action?.();
              }}
            >
              {buttons.secondary.text}
            </SecondaryButton>
          )}
        </div>
      )}
    </TemplateModal>
  );
}
