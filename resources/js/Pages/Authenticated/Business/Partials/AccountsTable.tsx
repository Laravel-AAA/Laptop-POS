import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { IBusiness, IUser } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";

export default function AccountsTable({
  className = "",
  business,
}: {
  className?: string;
  business: IBusiness & { users: IUser[] };
}) {
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
    <section className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Accounts</h2>

        <p className="text-normal mt-1 text-gray-600">
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
