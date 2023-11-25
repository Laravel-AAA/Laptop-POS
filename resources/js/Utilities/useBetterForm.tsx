import { InertiaFormProps } from "@/types/global";
import { setDataByMethod, setDataByObject } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
/**
 * `useBetterForm` is a add-on on `useForm` which adds more functionality such as `setData` with type hint.
 * And `dirty` which tells if a field have been changed, which typically will be used for hiding an error, after user change the field
 */
export type UseBetterForm<T extends object> = Omit<
  InertiaFormProps<T>,
  "setData" | "isDirty" | "processing"
> & {
  //for type hint.
  //We remove `setData` from `InertiaFormProps` and add another `setData` with different param type.
  setData: <K extends keyof T>(key: K, value: T[K]) => void;
  setAllData: setDataByObject<T> & setDataByMethod<T>;
  isDirty: (key?: keyof T) => boolean;
  setProcessing: (isProcessing: boolean) => void;
  readonly processing: boolean;
};

export default function useBetterForm<T extends object>(
  initialValue: T,
  rememberKey?: string,
): UseBetterForm<T> {
  const [oldValues, setOldValues] = useState<T>(
    JSON.parse(JSON.stringify(initialValue)),
  );

  const form = useForm<T>(
    rememberKey === undefined ? "hi" : rememberKey,
    initialValue,
  );

  const [processing, setProcessing] = useState<boolean>(form.processing);

  useEffect(() => {
    setOldValues(form.data);
  }, [form.hasErrors]);

  useEffect(() => {
    setProcessing(form.processing);
  }, [form.processing]);

  const setData: UseBetterForm<T>["setData"] = (key, value) => {
    form.setData(key, value);
  };

  const setAllData: UseBetterForm<T>["setAllData"] = (data) => {
    form.setData(data);
  };

  const isDirty: UseBetterForm<T>["isDirty"] = (key) => {
    if (key) {
      return form.data[key] !== oldValues[key];
    }
    return form.isDirty;
  };


  const better: UseBetterForm<T> = {
    ...form,
    setData,
    setAllData,
    isDirty,
    get processing() {
      return processing;
    },
    setProcessing: (isProcessing) => setProcessing(isProcessing),
  };
  return better;
}
