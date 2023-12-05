import { UseBetterForm } from "@/Utilities/useBetterForm";
import { IBusiness } from "@/types";
import { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";

export default function BusinessLogoInput<
  T extends { logo: IBusiness["logo"]; logoFile: IBusiness["logoFile"] },
>({ form }: { form: UseBetterForm<T> }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [logoSrc, setLogoSrc] = useState<string>(
    form.data.logo?.startsWith("http")
      ? form.data.logo
      : form.data.logo
      ? "/businesses-logo/" + form.data.logo
      : "/assets/logo/laptop-pos-logo.svg",
  );
  return (
    <div>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click?.()}
        className={
          "div-style group relative " + (form.processing && "opacity-25")
        }
        disabled={form.processing}
      >
        <p className="absolute -top-2 left-3 bg-white px-1 text-xs text-blue-gray-400">
          Logo
        </p>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0  top-0 rounded-md
        bg-[radial-gradient(#000,#00000030,#00000010,transparent)] opacity-0 transition duration-200 group-hover:opacity-100"
        >
          <p className="flex drop-shadow-lg h-full w-full items-center justify-center gap-2 text-center text-lg text-gray-100">
            <FaEdit />
            Edit Business Logo
          </p>
        </div>
        <div className="rounded-md border border-blue-gray-200 shadow-sm ">
          <input
            ref={fileInputRef}
            type="file"
            hidden={true}
            accept="image/*"
            onChange={(e) => {
              let file = e?.target?.files?.[0];
              if (file) {
                form.setData("logoFile", file);
                setLogoSrc(URL.createObjectURL(file));
              }
            }}
          />
          <img className="mx-auto h-40" src={logoSrc} alt={"Business logo"} />
        </div>
      </button>

      {(form.errors.logo || form.errors.logoFile) && (
        <p className="ml-2 mt-2 text-xs text-danger-600 ">
          {form.errors.logo || form.errors.logoFile}
        </p>
      )}
    </div>
  );
}
