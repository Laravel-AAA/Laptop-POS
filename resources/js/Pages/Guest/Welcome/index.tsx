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
import OpenSourceSection from "./Partials/OpenSourceSection";
import PoweredBySection from "./Partials/PoweredBySection";

export default function Welcome() {
  useEffect(() => {
    //don't show alert for developers
    if (
      !(location.host.includes("test") || location.host.includes("localhost"))
    )
      setTimeout(
        () =>
          alert(
            "Laptop POS is still in the process of development and may not perform as intended. Your data may not be preserved or may be deleted due to database development phases",
          ),
        10000,
      );
  }, []);

  return (
    <GuestLayout>
      <Head title="Welcome" />
      <Hero />
      <Features />
      <PoweredBySection />
      <OpenSourceSection />

      {/* By selling your product through Paddle, you can immediately accept purchases via:

Cards (including Mastercard, Visa, Maestro, American Express, Discover, Diners Club, JCB, UnionPay, and Mada)
PayPal
Alipay (in Early Access)*
iDEAL*
Google Pay (Chrome only)
Apple Pay (HTTPS pages on Safari only)
Wire Transfers (ACH/SEPA/BACS; for transactions over $100)*


Cards are always turned on for checkouts. Other payment options presented to your customer depend on the transaction currency, location of your customer, and device used to purchase. For example:

iDEAL is only presented to customers in the Netherlands for transactions in euro.
Apple Pay is only presented when customers are using a compatible Apple device or browser.
PayPal is only presented when making a purchase in a currency that PayPal supports.
Paddle automatically determines which payment methods to show to your customer, so you don't need to handle this yourself.

*/}
      {/* <div className="hidden absolute inset-0 -z-1 md:block" style={{
                        height: "120%",
                        backgroundImage: "radial-gradient(circle, #8a64fc 0%, #9bedff 100%)",
                        filter: "blur(120px)",
                    }}></div> */}
      {/* <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span> */}

      <PricingCards />
      {/**todo:
       * Grow Your Retail Business With Laptop POS:
       * Laptop POS software is a VAT ready cloud-based point of sale solution. Whether it is a supermarket, multi-brand retailer, lifestyle stores, hypermarket, fast food shop or boutique outlet; Laptop POS is the best point of sale systems for any retail businesses out there.
       *
       * Scalable and easy-to-use application:
Retail establishments often face multiple challenges in store optimization and integration. We offer you an efficient retail management software that is scalable, easy to use and quick to deploy.

Robust Retail Billing Software:
Whether you run a retail shop or a restaurant, Laptop POS acts as a reliable billing software, streamlining the checkout process, enhancing accuracy, and accelerating transaction times.

Advanced POS Inventory Software:
Laptop POS aids in effective inventory management, providing real-time updates on stock levels, ensuring that your business never runs out of crucial products.

Efficient Retail Point of Sale Software
Laptop POS facilitates quicker and efficient checkouts, leading to higher customer satisfaction.

Insightful Retail Analytics
The system provides valuable insights into sales, customer behavior, and inventory movement, aiding in strategic planning and decision-making.

Manage your business with a robust Laptop POS system.
Process transactions and manage your stock on the go with Laptop POS system. Our app is intuitive to use and easy to train on, so you and your staff can get started right away.
-Work anywhere with a fully featured Laptop POS system.
-Manage your business by any device from anywhere with tools like dashboard and inventory management.

Work wherever you want with a cloud-based POS system.
Using Laptop POS means your data is available wherever you are—at work, at home or on the road. Whether you're a restaurateur making quick menu edits on the fly or a retailer checking on end-of-day reports in your home office, being cloud-based means managing your business wherever it works for you.
-Work on any device, anywhere you are, with cloud-based tools
-Access your dashboard and data from any location
-Monitor inventory levels from anywhere, and manage stock between locations as needed
      */}
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
