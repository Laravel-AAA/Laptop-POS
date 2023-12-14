import {
  ButtonHTMLAttributes,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useRef,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import DangerButton from "../Buttons/DangerButton";
import PrimaryMaterialBtn from "../Buttons/Material/PrimaryMaterialBtn";
import SecondaryMaterialBtn from "../Buttons/Material/SecondaryMaterialBtn";

export interface IModalButtons {
  text: string;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  type: "primary" | "danger" | "secondary";
}
export default function TemplateModal({
  children,
  open,
  closeModal,
  buttons,
  title,
  icon,
}: PropsWithChildren<{
  open: boolean;
  closeModal: (clickedButtonText?: string) => any;
  buttons?: IModalButtons[];
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
        onClose={() => closeModal()}
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
          <div
            id="templateModal"
            className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          />
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
                  <div className="flex flex-col p-3 pb-2 pt-4 sm:flex-row">
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
                  <div className="mx-0 p-4 pt-0 sm:mx-3">{children}</div>
                </div>

                {buttons && (
                  <div className="space-y-2 bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:space-y-0 sm:px-6">
                    {buttons?.map((b) => (
                      <>
                        {b.type === "danger" && (
                          <DangerButton
                            className="w-full shadow sm:ml-3 sm:w-auto"
                            {...b.props}
                            onClick={(e) => {
                              closeModal(b.text);
                              b.props?.onClick?.(e);
                            }}
                          >
                            {b.text}
                          </DangerButton>
                        )}

                        {b.type === "primary" && (
                          <PrimaryMaterialBtn
                            className="w-full sm:ml-3 sm:w-auto"
                            {...b.props}
                            onClick={(e) => {
                              closeModal(b.text);
                              b.props?.onClick?.(e);
                            }}
                          >
                            {b.text}
                          </PrimaryMaterialBtn>
                        )}
                        {b.type === "secondary" && (
                          <SecondaryMaterialBtn
                            className="w-full sm:ml-3 sm:w-auto"
                            {...b.props}
                            onClick={(e) => {
                              closeModal(b.text);
                              b.props?.onClick?.(e);
                            }}
                          >
                            {b.text}
                          </SecondaryMaterialBtn>
                        )}
                      </>
                    ))}
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
