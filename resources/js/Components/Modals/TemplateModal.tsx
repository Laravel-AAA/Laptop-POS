import React, {
  ButtonHTMLAttributes,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import DangerButton from "../DangerButton";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
export interface IModalButtons {
  primary?: { text: string; props?: ButtonHTMLAttributes<HTMLButtonElement> };
  danger?: { text: string; props?: ButtonHTMLAttributes<HTMLButtonElement> };
  secondary?: { text: string; props?: ButtonHTMLAttributes<HTMLButtonElement> };
}
export default function TemplateModal({
  children,
  open,
  setOpen,
  buttons,
  title,
  icon,
}: PropsWithChildren<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttons?: IModalButtons;
  title: string;
  icon?: ReactNode;
}>) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white">
                  <div className="flex flex-col sm:flex-row p-3 pb-2 pt-4">
                    {icon || ""}
                    <div className="mb-2 self-center text-center sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="mx-3 font-semibold leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="mx-0 sm:mx-3 p-4 pt-0">{children}</div>
                </div>

                {(buttons?.primary ||
                  buttons?.secondary ||
                  buttons?.danger) && (
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    {buttons?.danger && (
                      <DangerButton
                        className="my-1 w-full shadow sm:ml-3 sm:w-auto"
                        onClick={(e) => {
                          setOpen(false);
                          buttons?.danger?.props?.onClick?.(e);
                        }}
                      >
                        {buttons.danger.text}
                      </DangerButton>
                    )}
                    {buttons?.primary && (
                      <PrimaryButton
                        className="my-1 w-full shadow sm:ml-3 sm:w-auto"
                        onClick={(e) => {
                          setOpen(false);
                          buttons.primary?.props?.onClick?.(e);
                        }}
                      >
                        {buttons.primary.text}
                      </PrimaryButton>
                    )}
                    {buttons?.secondary && (
                      <SecondaryButton
                        className="my-1 mb-0 w-full shadow sm:ml-3 sm:w-auto"
                        onClick={(e) => {
                          setOpen(false);
                          buttons.secondary?.props?.onClick?.(e);
                        }}
                      >
                        {buttons.secondary.text}
                      </SecondaryButton>
                    )}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
