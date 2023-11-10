import { InertiaFormProps } from "@/types/global";
import { setDataByMethod, setDataByObject } from "@inertiajs/inertia-react";
import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
/**
 * `useBetterForm` is a add-on on `useForm` which adds more functionality such as `setData` with type hint.
 * And `dirty` which tells if a field have been changed, which typically will be used for hiding an error, after user change the field
 */
export type UseBetterForm<T extends object> = Omit<
  InertiaFormProps<T>,
  "setData" | "isDirty" | "processing" | "recentlySuccessful"
  // | "errors"
  // | "clearErrors"
> & {
  //for type hint.
  //We remove `setData` from `InertiaFormProps` and add another `setData` with different param type.
  setData: <K extends keyof T>(key: K, value: T[K]) => void;
  setAllData: setDataByObject<T> & setDataByMethod<T>;
  isDirty: (key?: keyof T) => boolean;
  setProcessing: (isProcessing: boolean) => void;
  readonly processing: boolean;
  readonly dirtyData: Partial<T>;
  patchDirty: InertiaFormProps<T>["patch"];
  readonly recentlySuccessful: boolean;
  // errors: Partial<Record<keyof T, string>>;
  // clearErrors: () => void;
};

export default function useBetterForm<T extends object>(
  initialValue: T,
  rememberKey?: string,
): UseBetterForm<T> {
  const form =
    rememberKey === undefined
      ? useForm<T>(initialValue)
      : useForm<T>(rememberKey, initialValue);
  const [processing, setProcessing] = useState<boolean>(form.processing);
  // const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [oldValues, setOldValues] = useState<T>(
    JSON.parse(JSON.stringify(initialValue)),
  );

  const [recentlySuccessful, setRecentlySuccessful] = useState<boolean>(false);

  useEffect(() => {
    setOldValues(form.data);
  }, [form.hasErrors]);

  useEffect(() => {
    setProcessing(form.processing);
  }, [form.processing]);

  useEffect(() => {
    setRecentlySuccessful(form.recentlySuccessful);
  }, [form.recentlySuccessful]);

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

  const dirtyData = () => {
    const clone: Partial<T> = JSON.parse(JSON.stringify(form.data));
    for (let k in clone) {
      if (clone[k] === oldValues[k]) {
        delete clone[k];
      }
    }
    return clone;
  };

  const patchDirty: UseBetterForm<T>["patchDirty"] = (url, options) => {
    const clone: Partial<T> = { ...form.data };
    for (let k in clone) {
      if (clone[k] === oldValues[k]) {
        console.log(
          "\n\nnot dirty:",
          k,
          "\nvalue:",
          clone[k],
          "\noldValue:",
          oldValues[k],
        );
        delete clone[k];
      } else
        console.log(
          "\n\nDirty:",
          k,
          "\nvalue:",
          clone[k],
          "\noldValue:",
          oldValues[k],
        );
    }
    router.patch(url, clone as any, {
      ...options,
      onSuccess: (e) => {
        setRecentlySuccessful(true);
        setTimeout(() => setRecentlySuccessful(false), 2000);
        options?.onSuccess?.(e);
      },
      onError: (e) => {
        for (let k in e) {
          form.setError(k as keyof T, e[k]);
        }
        options?.onError?.(e);
      },
    });
  };

  const clearErrors = () => {
    form.clearErrors();
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
    get dirtyData() {
      return dirtyData();
    },
    patchDirty,
    get recentlySuccessful() {
      return recentlySuccessful;
    },
  };
  return better;
}
