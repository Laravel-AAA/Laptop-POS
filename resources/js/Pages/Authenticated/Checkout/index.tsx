import { Card } from "@material-tailwind/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IFilterBill, ILaravelPaginate, IProduct, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import CheckoutHeader from "./Partials/CheckoutHeader";
import Items from "./Partials/Items";
import RightSide from "./Partials/RightSide";

export default function Checkout({
  auth,
  products: paginateProducts,
}: PageProps<{
  products: ILaravelPaginate<IProduct>;
  filter: IFilterBill;
}>) {
  const products: IProduct[] = paginateProducts.data;

  console.log({ products });

  return (
    <AuthenticatedLayout user={auth.user} header={<CheckoutHeader />}>
      <Head title="Checkout" />

      <div className="flex-row-reverse md:flex">
        <RightSide className="w-full shrink" />
        <Items
          className="w-full shrink-0 md:w-[27rem] lg:w-[41rem] xl:w-[54rem] 2xl:w-[68rem]"
          products={products}
        />
      </div>
    </AuthenticatedLayout>
  );
}
