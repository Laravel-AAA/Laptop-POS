import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { AuthPageProps, IBusiness, IUser } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";

export default function AccountsTable({
  mustVerifyEmail,
  status,
  className = "",
}: {
  mustVerifyEmail: boolean;
  status?: string;
  className?: string;
}) {
  const business =
    usePage<AuthPageProps<{ business: IBusiness & { users: IUser[] } }>>().props
      .business;

  const {
    data,
    setData,
    patch,
    errors,
    processing,
    recentlySuccessful,
    isDirty,
  } = useBetterForm(business);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route("profile.update"));
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Accounts</h2>

        <p className="mt-1 text-normal text-gray-600">
          Add, remove, or change an account's role in your business.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div>
          <table>
            <thead></thead>
            <tbody>
              {business.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton type="submit" disabled={processing}>
            Save
          </PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-green-500">Saved</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
