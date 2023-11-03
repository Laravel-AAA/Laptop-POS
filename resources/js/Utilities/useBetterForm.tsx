import { InertiaFormProps } from "@/types/global";
import { useForm } from "@inertiajs/react";
/**
 * `useBetterForm` is a plugin on `useForm` which adds more functionality such as `set` with type hint.
 * And `dirty` which tells if a field have been changed, which typically will be used for hiding an error, when user type aka change the input.
 */
export type UseBetterForm<T extends object> = Omit<
  InertiaFormProps<T>,
  "setData" | "isDirty"
> & {
  //for type hint.
  //We remove `setData` from `InertiaFormProps` and add another `setData` with different param type.
  setData: <K extends keyof T>(key: K, value: T[K]) => void;
  isDirty: (key?: keyof T) => boolean;
};

export default function useBetterForm<T extends object>(
  initialValue: T,
): UseBetterForm<T> {
  const form = useForm<T>(initialValue);
  // const [oldValues] = useState<T>(JSON.parse(JSON.stringify(initialValue)));
  const oldValues = JSON.parse(JSON.stringify(initialValue));
  const better: UseBetterForm<T> = {
    ...form,
    setData: (key, value) => {
      form.setData(key, value);
    },
    isDirty: (key) => {
      return key ? form.data[key] !== oldValues[key] : form.isDirty;
    },
  };
  return better;
}
