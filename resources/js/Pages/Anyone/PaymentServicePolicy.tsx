import AppName from "@/Components/Logo/AppName";
import { H2 } from "@/Components/Typography/H2";
import { H4 } from "@/Components/Typography/H4";
import LI from "@/Components/Typography/LI";
import P from "@/Components/Typography/P";
import UL from "@/Components/Typography/UL";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function PaymentServicePolicy({ auth }: PageProps) {
  const { t } = useTranslation();
  return (
    <>
      <Head title={t("Payment Service Policy")} />
      <GuestAuthLayout user={auth.user} header={t("Payment Service Policy")}>
        <Content />
      </GuestAuthLayout>
    </>
  );
}

function Content() {
  const { t } = useTranslation();
  return (
    <section className="mx-auto mt-6 w-11/12 space-y-3 md:w-10/12">
      <header>
        <H2>{t("Introduction")}</H2>

        <P>
          <AppName />
          {t("uses")}{" "}
          <a target="_blank" href="https://paddle.com">
            {t("Paddle")}
          </a>{" "}
          {t("to handle subscription")}.{" "}
          <a target="_blank" href="https://paddle.com">
            {t("Paddle")}
          </a>{" "}
          {t(
            "takes care of a lot of complicated back-office work, like global banking, managing foreign exchange, and filing sales taxes internationally",
          )}
        </P>
        <P>
          {t(
            'These terms and conditions create a contract (“Agreement”) between you (“Buyer”) and Paddle (as defined below) and govern your use of the Services.',
          )}
        </P>
        <P>
          {t(
            "Paddle is the Merchant of Record and authorised reseller of the Product for the Supplier, which means that you purchase the Product from Paddle using the Services, but the Product is licensed to you by the Supplier.",
          )}
        </P>
        <P>
          {t(
            "Please read the Agreement carefully. By placing an order with Paddle, you agree to the terms and conditions set out in both this Agreement and the Supplier Agreement.",
          )}
        </P>
        <P>
          {t(
            "WHERE A PRODUCT IS DIGITAL CONTENT WHICH IS IMMEDIATELY MADE AVAILABLE, BY DOWNLOADING OR OTHERWISE ACQUIRING THE PRODUCT, YOU CONSENT TO IMMEDIATE PERFORMANCE OF THIS AGREEMENT AND ACKNOWLEDGE THAT YOU WILL LOSE YOUR RIGHT OF WITHDRAWAL FROM THIS AGREEMENT ONCE THE DOWNLOAD OR APPLICABLE TRANSMISSION OF THE DIGITAL CONTENT HAS BEGUN.",
          )}
        </P>
        <P>
          {t(
            "If you are a Consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident. Nothing in this Agreement, including the Governing Law clause, affects your rights as a Consumer to rely on such mandatory provisions of local law.",
          )}
        </P>
      </header>

      <section>
        <H4>{t("Definitions and interpretation")}</H4>

        <P>
          {t(
            "“Business” means a Buyer which is purchasing the Product or using the Services in connection with their trade, business, craft or profession;",
          )}
        </P>
        <P>
          {t(
            '“Confidential Information” means any commercial, financial or technical information; information relating to the Product; the Services; plans or strategy, know-how or trade secrets which is obviously confidential or has been identified as such, or which is developed by a party in performing its obligations under, or otherwise pursuant to this Agreement;',
          )}
        </P>
        <P>
          {t(
            "“Consumer” means a Buyer who is purchasing the Product or using the Services wholly or mainly for their personal use;",
          )}
          ,
        </P>

        <P>
          {t(
            "“Digital Content” means data which are produced and supplied in digital form;",
          )}
        </P>
        <P>{t('“Paddle” means,')}</P>
        <UL>
          <LI>
            {t(
              "where the Buyer is purchasing the Product from within the United States: Paddle.com Inc. whose office is at 54 W. 40th St., New York, NY, 10018, USA; and",
            )}
          </LI>
          <LI>
            {t(
              "otherwise, for sales of the Product made in the rest of the world: Paddle.com Market Limited (incorporated in England and Wales with Company number 8172165),",
            )}
          </LI>
        </UL>
        <P>
          {t(
            "and in either case is also referred to in this Agreement as 'us', 'we', and 'our';",
          )}
        </P>
        <P>
          {t(
            '“Paddle Checkout” means the online checkout that Buyers use to purchase the Product and make payment to Paddle using payment methods such as credit card, PayPal, alternative payment methods and bank transfer;',
          )}
        </P>
        <P>
          {t(
            "“Product” means the Supplier's software or digital product(s) and/or Digital Content licensed for use by the Buyer under the terms of the Supplier Agreement;",
          )}
        </P>
        <P>{t('“Supplier” means the licensor of the Product;')}</P>
        <P>
          {t(
            '“Supplier Agreement” means the Supplier\'s terms and conditions in respect of the Product;',
          )}
        </P>
        <P>
          {t(
            "“Services” means Paddle’s services through which you can buy, get, license, rent or subscribe to the Product (and which for the avoidance doubt includes Paddle Checkout); and",
          )}
        </P>
        <P>
          {t(
            "“Transaction” means acquiring the Product via our Services for free or for a charge",
          )}
          .
        </P>
      </section>

      <section>
        <H4>{t("Contract Formation")}</H4>
        <P>
          {t(
            "By completing a Transaction through Paddle Checkout, you make a binding offer to enter into a contract with Paddle, subject to the terms of this Agreement. The Transaction process consists of the following steps:",
          )}
        </P>
        <P>
          {t(
            "Step one: you select the desired Product and agree the terms of the Supplier Agreement.",
          )}
        </P>
        <P>
          {t(
            "Step two: your personal data, required for the Transaction and delivery of the Product, is collected by us in accordance with the Privacy section below.",
          )}
        </P>
        <P>
          {t(
            "Final step: you can review all of the information again and, if necessary, correct it before completing the Transaction. You complete the Transaction by clicking on the button stating “order with obligation to pay” or a corresponding unambiguous statement that indicates that placing the order entails an obligation to make a payment.",
          )}
        </P>
        <P>
          {t(
            "Paddle will confirm receipt of the Transaction of the order immediately by sending you the order confirmation. The order confirmation will result in the creation of this Agreement and is acceptance of your offer to purchase the Product.",
          )}
        </P>
        <P>
          {t(
            "Your Agreement with Paddle is concluded upon the successful transmission of the Product, subject to the terms of this Agreement.",
          )}
        </P>
      </section>

      <section>
        <H4>{t("Software")}</H4>
        <P>
          {t(
            "Where any Product supplied is, or includes, software (“Software”), the Software is licensed by the relevant Supplier pursuant to the Supplier Agreement included with Software (or other applicable terms associated with non-Software Products, including recurring purchases or billing services) or otherwise agreed between you and the Supplier.",
          )}
        </P>
      </section>

      <section>
        <H4>{t("Payment, taxes and refunds")}</H4> <P></P>
        <P>
          <AppName />
          {t("'s sales are final and no refund will be issued")}
        </P>
        <P>
          {t(
            "Paddle will charge your chosen payment method (such as your credit card, debit card, PayPal account or any other methods available) for any paid Transactions, including any applicable taxes according to the tax jurisdiction in which the Transaction is taken place. If you pre-order the Product, you’ll be charged upfront, during which time you can request a refund for whatever reason until the content is delivered, after which the standard refund policy applies.",
          )}
        </P>
        <P>
          {t(
            "You agree to receipt of all invoices and receipts in an electronic format, which includes email. Product prices may change at any time.  If technical problems prevent or unreasonably delay delivery of the Product, your exclusive and sole remedy is either replacement of the Product or refund of the price paid, as determined by Paddle. When providing us with your information, you must ensure that it is up-to-date and accurate. Paddle will not be responsible for the event of non-receipt of the Product due to incorrect information being provided by you. To make amendments to your order, please contact us here. We reserve the right to not fulfil and to cancel orders if we’re unable to obtain payment authorisation from the issuer of your payment card.",
          )}
        </P>
      </section>

      <section>
        <H4>{t("Chargebacks")}</H4>
        <P>
          {t(
            "We understand that there may be occasions where you may not recognise or wish to dispute a payment made to Paddle in relation to a Transaction.",
          )}
        </P>
        <P>
          {t(
            "Chargeback is a mechanism for your payment card issuer (at their discretion) to reclaim money from a retailer’s bank. This can allow your card issuer to provide you with a refund in a number of circumstances, including:",
          )}
        </P>
        <UL>
          <LI>{t("if you do not get the Product you paid for;")}</LI>
          <LI>
            {t(
              "if you are charged the wrong amount, or charged twice by mistake;",
            )}
          </LI>
          <LI>{t("if the payment was made fraudulently.")}</LI>
        </UL>
        <P>
          {t(
            "You agree to contact Paddle prior to raising a request for a chargeback or any dispute with your bank or card issuer in relation to any Transaction",
          )}
          .
        </P>
        <P>
          {t(
            "We recognise that chargebacks can happen for a variety of reasons. However, if you make a card payment through Paddle, and later dispute a legitimate charge by raising a chargeback without merit or legitimate reason (as determined at our sole discretion), whether fraudulently or otherwise, then we reserve the right to prohibit you from using our Services by providing compelling evidence to refute your invalid chargeback request.",
          )}
        </P>

        <section>
          <H4>{t("Termination and suspension of Services")}</H4>
          <P>
            {t(
              "If you fail, or Paddle suspects that you have failed, to comply with any of the provisions of this Agreement, Paddle may, without notice to you: (i) terminate this Agreement, and you will remain liable for all amounts due up to and including the date of termination; and/or (ii) terminate your license to the Product; and/or (iii) preclude your access to the Services. Paddle further reserves the right to modify, suspend, or discontinue the Services (or any part thereof) at any time with or without notice to you, and Paddle will not be liable to you or to any third party should it exercise such rights.  To the extent possible, Paddle will warn you in advance of any modification, suspension or discontinuance of the Service. Termination of the Service will not affect any rights accrued thereunder or the Product that you have already acquired.",
            )}
          </P>
          <P>
            {t(
              "Where Paddle suspects that fraudulent activities are being conducted by you, we have the right to cancel and block your usage of our Services without notice. Paddle may also liaise with relevant authorities for law enforcement and financial crime prevention reasons and pass your details on to authorities should evidence be found confirming malicious or fraudulent or other criminal activity.",
            )}
          </P>
        </section>
      </section>

      <section>
        <H4>{t("Consumer Right to Cancel")}</H4>
        <P>
          {t(
            "If you are a Consumer and unless the below exception applies, you have the right to cancel this Agreement and return the Product within 14 days without giving any reason. The cancellation period will expire after 14 days from the day after completion of the Transaction. To meet the cancellation deadline, it is sufficient that you send us your communication concerning your exercise of the cancellation right before the expiration of the 14 day period.",
          )}
        </P>
        <P>
          {t(
            "To cancel your order, you must inform Paddle of your decision. To ensure immediate processing, please do so by contacting us",
          )}{" "}
          <a target="_blank" href="https://paddle.net">
            {t("here")}
          </a>
          .
          {t(
            "Please note that in respect of subscription services your right to cancel is only present following the initial subscription and not upon each automatic renewal.",
          )}
        </P>
        <P>
          {t(
            "You also have the right to inform us using the model cancellation form below or by making any other clear, unambiguous statement through our available communication channels. If you use our",
          )}{" "}
          <a target="_blank" href="https://paddle.net">
            {t("“Contact Us”")}
          </a>{" "}
          {t(
            "form online, we will communicate acknowledgment of receipt of your cancellation request to you without delay.",
          )}
        </P>
      </section>

      <section>
        <H4>{t("Exception to the Right to Cancel")}</H4>
        <P>
          {t(
            "Your right as a Consumer to cancel your order does not apply to the supply of Digital Content that you have started to download, stream or otherwise acquire and to Products which you have had the benefit of.",
          )}
        </P>
      </section>

      <section>
        <H4>{t("Refund Policy")}</H4>
        <P>
          {t(
            "Refunds are provided at the sole discretion of Paddle and on a case-by-case basis and may be refused. Paddle will refuse a refund request if we find evidence of fraud, refund abuse, or other manipulative behaviour that entitles Paddle to counterclaim the refund.",
          )}
        </P>
        <P>
          {t(
            "This does not affect your rights as a Consumer in relation to Products which are not as described, faulty or not fit for purpose.",
          )}
        </P>
      </section>

      <section>
        <H4>{t("Payment by wire transfer")}</H4>
        <P>
          {t(
            "It’s your responsibility to provide us with the correct payment details (your unique bank transfer reference number), Company VAT / sales tax code and order information to avoid delays in your order fulfilment, as we may be unable to reconcile or refund such transactions. Orders, where payments are made via wire transfer, are not protected under the CCA (Consumer Credit Act) and are therefore not eligible for a refund. However, in cases where the transaction amount, including sales tax or where the sales tax refund is above $ / £ / €100, you may be entitled to a refund including the sales tax you paid, at Paddle’s discretion.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Indirect Sales Tax refund policy")}</H4>
        <P>
          {t(
            "If you’ve been charged sales tax on your purchase and are registered for sales tax in the country of purchase, you may be entitled to a refund of the sales tax amount if permitted by the laws applicable in such country. Sales taxes include VAT, GST, Consumption Tax and others as applicable from time to time. For wire transfers, please refer to the Wire Transfer section above for more information regarding eligibility of sales tax refunds.",
          )}
        </P>
        <P>
          {t(
            "You must contact Paddle within 60 days after completing the purchase to be eligible for a sales tax refund. This refund will only be processed upon the provision of a valid sales tax code for your country.",
          )}
        </P>
        <P>
          {t(
            "All refund requests received after 60 days from the date of the Transaction will not be processed.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Subscriptions")}</H4>
        <P>
          {t(
            "The Services may allow you to purchase access to Product on a subscription basis (“Paid Subscriptions”). Paid Subscriptions automatically renew until cancelled. We’ll notify you if the price of a Paid Subscription increases and, if required, seek your consent to continue. You’ll be charged between 00:00 and 01:00 (UTC) on the day the Paid Subscription period renews. If you wish to cancel your subscription, please contact us",
          )}{" "}
          <a href="https://paddle.net" target="_blank">
            {t("here")}
          </a>{" "}
          {t(
            "at least 48 hours before the end of the current billing period. Please make sure you provide your order number and the email address used to purchase the Product. Your cancellation will take effect at the next payment date. There are no refunds on unused subscription periods.",
          )}
        </P>
        <P>
          {t(
            "Certain Paid Subscriptions may offer a free trial before charging you.  If you decide to unsubscribe from a Paid Subscription before we start charging your payment method, you must cancel the subscription before the expiration of the trial period by contacting us",
          )}{" "}
          <a href="https://paddle.net">{t("here")}</a>.{" "}
          {t(
            "If we cannot charge your payment method for any reason (such as expiration or insufficient funds), and you have not cancelled your Paid Subscription, you remain responsible for any uncollected amounts. We reserve the right to cancel your Paid Subscription if we are unable to successfully charge your payment method to renew your subscription.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Contract Changes")}</H4>
        <P>
          {t(
            "Paddle reserves the right at any time to modify this Agreement and to add new or additional terms or conditions on your use of the Services.  Such modifications and additional terms and conditions will be communicated to you and if accepted, will be effective immediately and will be incorporated into this Agreement and will apply to the purchase of any further Products through the Services. In the event you refuse to accept such changes, Paddle will have the right to terminate the Agreement.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Transfer to Supplier")}</H4>
        <P>
          {t(
            "This Agreement and Paddle’s rights and obligations under this Agreement will be transferred automatically to the Supplier upon receipt of a written notice from the Supplier requesting the transfer.  In such circumstances:",
          )}
        </P>
        <UL>
          <LI>
            {t(
              "The Supplier agrees to be bound by this Agreement in every way as if it were the original party to it in place of Paddle",
            )}
          </LI>
          <LI>
            {t(
              "You will perform the Agreement and be bound by its terms in every way as if the Supplier were the original party to it in place of Paddle.",
            )}
          </LI>
        </UL>
      </section>
      <section>
        <H4>{t("Third party materials")}</H4>
        <P>
          {t(
            "Paddle is not responsible or liable for third party materials included within or linked from the Product or the Services.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Intellectual Property")}</H4>
        <P>
          {t(
            "You agree that the Services, including but not limited to content, graphics, user interface, audio clips, video clips, editorial content, and the scripts and software used to implement the Services, contain proprietary information and material that is owned by Paddle and/or its licensors, and is protected by applicable intellectual property and other laws, including but not limited to copyright. You agree that you will not use such proprietary information or materials in any way whatsoever except for in compliance with this Agreement. No portion of the Services may be reproduced in any form or by any means, except as expressly permitted by this Agreement. You agree not to modify, rent, loan, sell, or distribute the Services or Product in any manner, and you shall not exploit the Services in any manner not expressly authorised.",
          )}
        </P>
        <P>
          {t(
            "The Paddle name, the Paddle logo and other Paddle trademarks, service marks, graphics, and logos used in connection with the Services are trademarks or registered trademarks of Paddle in the U.K. and other countries throughout the world, you are granted no right or license with respect to any of the aforesaid trademarks.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Copyright notice")}</H4>
        <P>
          {t(
            "If you believe that any Products available through the Services infringe a copyright claimed by you, please contact Paddle at support@laptop-pos.com.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Responsibilities and Limitation of Liability")}</H4>
        <P>
          {t(
            "Paddle disclaims any and all warranties, express, implied or statutory regarding the Services to the full extent permitted by law and in particular does not warrant that:",
          )}
        </P>
        <P>
          {t(
            "i) your use of the Services will be uninterrupted or error-free; ii) the Services or Products will be free from corruption, attack, viruses, interference, hacking or other security intrusion which shall be events of Force Majeure, and Paddle disclaims any liability relating thereto. You shall be responsible for backing up your own system, including any Product purchased, acquired or rented using the Service.",
          )}
        </P>
        <P>
          {t(
            "In no event will Paddle, its partners, service providers, affiliates or any of their respective directors, officers, employees or agents be liable to the Buyer for any special, incidental, indirect, punitive, exemplary or consequential damages, whether foreseeable or unforeseeable, which may arise out of or in connection with this Agreement, regardless of whether either party has been apprised of the possibility or likelihood of such damages occurring, or whether claims are based or remedies are sought in contract or tort otherwise.",
          )}
        </P>
        <P>
          {t(
            "You may have the benefit of a manufacturer’s, licensor’s or Supplier’s warranty with the Products supplied and you should refer to the relevant documentation supplied with the Product in this regard (including the Supplier Agreement).",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Waiver and Severability")}</H4>
        <P>
          {t(
            "If any provision of this Agreement is held to be invalid or unenforceable by a court of competent jurisdiction, the parties nevertheless agree that the court should endeavour to give effect to the parties' intentions as reflected in the provision, and the other provisions of these terms remain in full force and effect. Paddle's acquiescence in the breach of a provision of this Agreement or failure to act upon such breach does not waive Paddle's right to act with respect to subsequent or similar breaches. Likewise, the delay or failure of Paddle to exercise or enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Confidentiality")}</H4>
        <P>
          {t(
            "The parties agree that any Confidential Information provided under this Agreement shall be held and maintained in strict confidence. Each party agrees to protect the confidentiality of such information in a manner consistent with the way a reasonable person would protect similar Confidential Information.",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Privacy")}</H4>
        <P>
          {t(
            "Paddle will maintain appropriate administrative, physical, and technical safeguards for protection of the security, confidentiality and integrity of Buyer data, as described in Paddle’s Privacy Policy which can be found at paddle.com/legal/privacy (or such other URL that Paddle may provide from time to time).",
          )}
        </P>
      </section>
      <section>
        <H4>{t("Governing law")}</H4>
        <P>
          {t(
            "Specifically excluded from application to this Agreement is the law known as the United Nations Convention on the International Sale of Goods.",
          )}
        </P>
        <P className="font-extrabold">
          {t("Consumers resident in the United States")}
        </P>
        <P>
          {t(
            "This Agreement and the relationship between you and Paddle, and all Transactions shall be governed by and construed under the laws of the State of New York, including its Uniform Commercial Code, without reference to conflict of laws principles. Any dispute or claim arising out of or in connection with this Agreement or the performance, breach or termination thereof, shall be finally settled by binding arbitration in New York, NY under the Rules of Arbitration of the International Chamber of Commerce by three arbitrators appointed in accordance with said rules. Judgment on the award rendered by the arbitrators may be entered in any court having jurisdiction thereof.  Notwithstanding the foregoing, either party may apply to any court of competent jurisdiction for injunctive relief without breach of this arbitration provision",
          )}
        </P>
        <P className="font-extrabold">{t("All other Consumers")}</P>
        <P>
          {t(
            "Except to the extent amended by any provisions of the law of the country in which you are resident, this Agreement and the relationship between you and Paddle, and all Transactions shall be governed by the laws of the England.",
          )}
        </P>
        <P className="font-extrabold">{t("Businesses")}</P>
        <P>
          {t(
            "If you are a Business, any dispute or claim arising out of or in connection with a contract between us or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and the courts of England shall have exclusive jurisdiction to settle any such dispute or claim.",
          )}
        </P>
      </section>
    </section>
  );
}
