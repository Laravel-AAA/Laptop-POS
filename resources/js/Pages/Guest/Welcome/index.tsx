import { Head } from "@inertiajs/react";
/**
 * check out [react-icons](https://react-icons.github.io/react-icons/) for more info...
 */
import GuestLayout from "@/Layouts/GuestLayout";
import Hero from "./Partials/Hero";
import Features from "./Partials/Features";
import PricingCards from "./Partials/PricingCards";
import LastSection from "./Partials/LastSection";
import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    if (!location.host.includes("test"))
      setTimeout(
        () =>
          alert(
            "This website is still in the process of development and may not perform as intended. Your data may not be preserved or may be deleted due to database development phases",
          ),
        10000,
      );
  }, []);

  return (
    <GuestLayout>
      <Head title="Welcome" />
      <Hero />
      <Features />
      {/* todo segment about the flexibility */}

      {/* <div className="hidden absolute inset-0 -z-1 md:block" style={{
                        height: "120%",
                        backgroundImage: "radial-gradient(circle, #8a64fc 0%, #9bedff 100%)",
                        filter: "blur(120px)",
                    }}></div> */}
      <PricingCards />
      {/** todo:
       * All plans above include:
Online store

Shareable product pages

Unlimited products

24/7 support

Fraud analysis

Abandoned cart recovery

Manual order creation

Discount codes

Sales channels

World’s best-converting checkout

Free SSL certificate

Sell in over 133 countries

App ecosystem with 4,100+ apps

Gift cards

Shopify Marketplace Connect

First 50 orders from shopify synced listings are free, then 1% per synced order up to $99 per month (USD).

Marketing automation

Send automated emails with templated or custom workflows.

Customer segmentation

Filter and group customers into an unlimited amount of segments.

Unlimited contacts

Shopify POS Lite

Accept casual, in-person payments at markets, fairs, pop-ups, and more.

Can upgrade to POS Pro

Upgrade to POS Pro to run your brick-and-mortar business.
       */}
      <LastSection />
    </GuestLayout>
  );
}
