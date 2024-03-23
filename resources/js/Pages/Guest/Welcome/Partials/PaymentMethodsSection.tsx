import React, { HTMLAttributes, ImgHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

export default function PaymentMethodsSection() {

  const { t } = useTranslation();
  return (
    <section id="payment-options" className="bg-blue-gray-100 py-1 pb-10">
      <div className="inline-flex w-full flex-nowrap overflow-hidden py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
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
        <Images />
        <Images aria-hidden="true" />
      </div>
      <p className="px-4 text-center text-xs text-gray-700">
        *{ t( "Payment options presented to you on checkout depend on the currency, location, and device used when subscribing." ) }
        {" "}
        <a
          href="https://www.paddle.com/help/start/intro-to-paddle/which-payment-methods-do-you-support"
          target="_blank"
          className="hover:text-blue-400"
        >
          { t( "For more information click here" ) }
        </a>
      </p>
    </section>
  );
}

function Images({ ...props }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      {...props}
      className="flex animate-infinite-scroll items-center justify-center md:justify-start"
    >
      <Img
        src="/assets/Banks/mastercard.png"
        alt="Mastercard Logo"
        title="Mastercard Logo"
      />
      <Img
        src="/assets/Banks/visa.png"
        className="!h-16 md:!h-24"
        alt="Visa Logo"
        title="Visa Logo"
      />
      <Img
        src="/assets/Banks/maestro.png"
        alt="Maestro Logo"
        title="Maestro Logo"
      />
      <Img
        src="/assets/Banks/mada.png"
        className="!h-10 md:!h-14"
        alt="Mada Logo"
        title="Mada Logo"
      />
      <Img
        src="/assets/Banks/paypal.png"
        alt="Paypal Logo"
        title="Paypal Logo"
      />
      <Img
        src="/assets/Banks/american-express.png"
        alt="American Express Logo"
        title="American Express Logo"
      />
      <Img
        src="/assets/Banks/google-pay.png"
        className="!h-16 md:!h-24"
        alt="Google Pay Logo"
        title="Google Pay Logo"
      />
      <Img
        src="/assets/Banks/apple-pay.png"
        className="!h-16 md:!h-24"
        alt="Apple Pay Logo"
        title="Apple Pay Logo"
      />
      <Img
        src="/assets/Banks/discover.png"
        alt="Discover Logo"
        title="Discover Logo"
      />
      <Img
        src="/assets/Banks/diners-club.png"
        className="!h-10 md:!h-14"
        alt="Diners Club Logo"
        title="Diners Club logo"
      />
      <Img src="/assets/Banks/jcb.png" alt="JCB Logo" title="JCB Logo" />
      <Img
        src="/assets/Banks/union-pay.png"
        alt="UnionPay Logo"
        title="UnionPay Logo"
      />
    </ul>
  );
}

function Img({
  className = "",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <li className="mx-8">
      <img
        {...props}
        loading="lazy"
        className={"h-14 w-auto max-w-none md:h-20 " + className}
      />
    </li>
  );
}
