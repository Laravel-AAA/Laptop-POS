import AppName from "@/Components/Logo/AppName";
import A from "@/Components/Typography/A";
import { H2 } from "@/Components/Typography/H2";
import { H4 } from "@/Components/Typography/H4";
import LI from "@/Components/Typography/LI";
import P from "@/Components/Typography/P";
import UL from "@/Components/Typography/UL";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function TermsAndConditions({ auth }: PageProps) {
  const { t } = useTranslation();
  return (
    <>
      <Head title={t("Terms & Conditions")} />
      <GuestAuthLayout user={auth.user} header={t("Terms & Conditions")}>
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
        <H2>{t("Terms and Conditions")}</H2>

        <P>
          {t("Welcome to")} <AppName />
        </P>

        <P>
          {t(
            "These terms and conditions outline the rules and regulations for the use of",
          )}{" "}
          <AppName /> {t("'s Website, located at laptop-pos.com.")}
        </P>

        <P>
          {t(
            "By accessing this website we assume you accept these terms and conditions. Do not continue to use",
          )}{" "}
          <AppName />{" "}
          {t(
            "if you do not agree to take all of the terms and conditions stated on this page.",
          )}
        </P>

        <P>
          {t(
            "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of sa. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same."
          )}
        </P>
      </header>

      <section>
        <H4>{t("Cookies")}</H4>

        <P>
          {t("We employ the use of cookies. By accessing")} <AppName />,{" "}
          {t("you agreed to use cookies in agreement with the")} <AppName />{" "}
          {t("'s")}
          <A href={route("privacyPolicy")}>{t("Privacy Policy")}</A>.
        </P>

        <P>
          {t(
            "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          )}
        </P>
      </section>

      <section>
        <H4>{t("License")}</H4>

        <P>
          {t("Unless otherwise stated")}, <AppName />{" "}
          {t(
            "and/or its licensors own the intellectual property rights for all material on",
          )}
          <AppName />.
          {t(
            "All intellectual property rights are reserved. You may access this from",
          )}{" "}
          <AppName />
          {t(
            "for your own personal use subjected to restrictions set in these terms and conditions.",
          )}
        </P>

        <P>{t("You must not:")}</P>
        <UL>
          <LI>
            {t("Republish material from")} <AppName />
          </LI>
          <LI>
            {t("Sell, rent or sub-license material from")} <AppName />
          </LI>
          <LI>
            {t("Reproduce, duplicate or copy material from")} <AppName />
          </LI>
          <LI>
            {t("Redistribute content from")} <AppName />
          </LI>
        </UL>

        <P>
          {t(
            "This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the",
          )}{" "}
          <a href="https://www.termsandconditionsgenerator.com/">
            {t("Free Terms and Conditions Generator")}
          </a>
          .
        </P>

        <P>
          {t(
            "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website.",
          )}
          <AppName />
          {t(
            "does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of",
          )}
          <AppName />
          {t(
            ",its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws,",
          )}
          <AppName />
          {t(
            "shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
          )}
        </P>

        <P>
          <AppName />
          {t(
            "reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.",
          )}
        </P>

        <P>{t("You warrant and represent that:")}</P>

        <UL>
          <LI>
            {t(
              "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
            )}
          </LI>
          <LI>
            {t(
              "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
            )}
          </LI>
          <LI>
            {t(
              "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
            )}
          </LI>
          <LI>
            {t(
              "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
            )}
          </LI>
        </UL>

        <P>
          {t("You hereby grant")} <AppName />{" "}
          {t(
            "a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.",
          )}
        </P>
      </section>

      <section>
        <H4>{ t( "Hyperlinking to our Content" ) }</H4>

        <P>
{ t( "The following organizations may link to our Website without prior written approval:" ) }
        </P>

        <UL>
          <LI>{ t( "Government agencies;" ) }</LI>
          <LI>{ t( "Search engines;" ) }</LI>
          <LI>{ t( "News organizations;" ) }</LI>
          <LI>
{ t( "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and" ) }
          </LI>
          <LI>
{ t( "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site." ) }
          </LI>
        </UL>

        <P>
{ t( "These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site." ) }
        </P>

        <P>
{ t( "We may consider and approve other link requests from the following types of organizations:" ) }
        </P>

        <UL>
          <LI>{ t( "commonly-known consumer and/or business information sources;" ) }</LI>
          <LI>{ t( "dot.com community sites;" ) }</LI>
          <LI>{ t( "associations or other groups representing charities;" ) }</LI>
          <LI>{ t( "online directory distributors;" ) }</LI>
          <LI>{ t( "internet portals;" ) }</LI>
          <LI>{ t( "accounting, law and consulting firms; and" ) }</LI>
          <LI>{ t( "educational institutions and trade associations." ) }</LI>
        </UL>

        <P>
{ t( "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of" ) }

          <AppName />;{ t(  "and (d) the link is in the context of general resource information." ) }
        </P>

        <P>
{ t( "These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site." ) }
            </P>

        <P>
{ t( "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to" ) }


          <AppName />.
{ t( "Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link.  Wait 2-3 weeks for a response." ) }
        </P>

        <P>{ t( "Approved organizations may hyperlink to our Website as follows:" ) }</P>

        <UL>
          <LI>{ t( "By use of our corporate name; or" ) }</LI>
          <LI>{ t( "By use of the uniform resource locator being linked to; or" ) }</LI>
          <LI>
{ t( "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site." ) }
          </LI>
        </UL>

        <P>
          { t( "No use of"  ) }{" "}<AppName />
{ t( "'s logo or other artwork will be allowed for linking absent a trademark license agreement." ) }
        </P>
      </section>
      <section>
        <H4>{ t( "iFrames" ) }</H4>

        <P>
{ t( "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website." ) }
        </P>
      </section>
      <section>
        <H4>{ t( "Content Liability" ) }</H4>

        <P>
{ t( "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights." ) }
            </P>
      </section>
      <section>
        <H4>{ t( "Reservation of Rights" ) }</H4>

        <P>
{ t( "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions." ) }
        </P>
      </section>
      <section>
        <H4>{ t( "Removal of links from our website" ) }</H4>

        <P>
{ t( "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly." ) }
        </P>

        <P>
{ t( "We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date." ) }
        </P>
      </section>

      <section>
        <H4>{ t( "Disclaimer" ) }</H4>

        <P>
{ t( "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:" ) }
        </P>

        <UL>
          <LI>
{ t( "limit or exclude our or your liability for death or personal injury;" ) }
          </LI>
          <LI>
{ t( "limit or exclude our or your liability for fraud or fraudulent misrepresentation;" ) }
          </LI>
          <LI>
{ t( "limit any of our or your liabilities in any way that is not permitted under applicable law; or" ) }
             </LI>
          <LI>
{ t( "exclude any of our or your liabilities that may not be excluded under applicable law." ) }
          </LI>
        </UL>

        <P>
{ t( "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty." ) }
        </P>

        <P>
{ t( "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature." ) }
        </P>
      </section>
    </section>
  );
}
