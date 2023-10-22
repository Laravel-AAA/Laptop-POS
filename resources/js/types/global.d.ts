import { AxiosInstance } from "axios";
import ziggyRoute, { Config as ZiggyConfig } from "ziggy-js";

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  var route: typeof ziggyRoute;
  var Ziggy: ZiggyConfig;
}

//InertiaFormProps has two versions one is the return type of `useForm` function and other is
//the exposed type. So, we got error when using `const form:InertiaFormProps = useForm()`.
//This type is what useForm will return.
export interface InertiaFormProps<TForm extends FormDataType> {
    data: TForm;
    isDirty: boolean;
    errors: Partial<Record<keyof TForm, string>>;
    hasErrors: boolean;
    processing: boolean;
    progress: Progress | null;
    wasSuccessful: boolean;
    recentlySuccessful: boolean;
    setData: setDataByObject<TForm> & setDataByMethod<TForm> & setDataByKeyValuePair<TForm>;
    transform: (callback: (data: TForm) => TForm) => void;
    setDefaults(): void;
    setDefaults(field: keyof TForm, value: FormDataConvertible): void;
    setDefaults(fields: Partial<TForm>): void;
    reset: (...fields: (keyof TForm)[]) => void;
    clearErrors: (...fields: (keyof TForm)[]) => void;
    setError(field: keyof TForm, value: string): void;
    setError(errors: Record<keyof TForm, string>): void;
    submit: (method: Method, url: string, options?: VisitOptions) => void;
    get: (url: string, options?: VisitOptions) => void;
    patch: (url: string, options?: VisitOptions) => void;
    post: (url: string, options?: VisitOptions) => void;
    put: (url: string, options?: VisitOptions) => void;
    delete: (url: string, options?: VisitOptions) => void;
    cancel: () => void;
}