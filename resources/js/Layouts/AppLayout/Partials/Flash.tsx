import { PageProps } from "@/types";
import { Transition } from "@headlessui/react";
import { Alert } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegMessage, FaTriangleExclamation } from "react-icons/fa6";

export default function Flash({ flash }: { flash: PageProps["flash"] }) {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    setShow(true);
    const length = flash.message?.length||flash.error?.length||flash.success?.length||flash.warning?.length||1;
    const timeout = setTimeout(() => setShow(false), 1000 + (length*100));
    // return () => clearTimeout(timeout);
  }, [flash]);

  return (
    <div className="space-y-3">
      <Transition
        show={show}
        enter="transform transition duration-300 ease-out"
        enterFrom="opacity-50 translate-x-96 scale-95"
        enterTo="opacity-100 translate-x-0 scale-100"
        leave="transform duration-300 transition ease-in"
        leaveFrom="opacity-100 translate-x-0 scale-100 "
        leaveTo="opacity-0 translate-x-96 scale-95"
        className="opacity-100"
      >
        {flash.message && (
          <Alert>{flash.message}</Alert>
        )}

        {flash.error && (
          <Alert
            icon={<FaTriangleExclamation className="h-6 " />}
            className="!bg-danger-600 text-gray-100"
            color="red"
          >
            {flash.error}
          </Alert>
        )}

        {flash.warning && (
          <Alert
            icon={<FaTriangleExclamation className="h-6" />}
            className="!bg-amber-400 text-gray-900"
            color="yellow"
          >
            {flash.warning}
          </Alert>
        )}

        {flash.success && (
          <Alert
            icon={<FaCheck className="h-6" />}
            className="!bg-green-600 text-gray-100"
            color="green"
          >
            {flash.success}
          </Alert>
        )}
      </Transition>
    </div>
  );
}
