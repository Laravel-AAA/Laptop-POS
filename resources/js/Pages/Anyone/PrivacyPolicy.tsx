import AppName from "@/Components/Logo/AppName";
import SupportEmailLink from "@/Components/SupportEmailLink";
import { H2 } from "@/Components/Typography/H2";
import { H4 } from "@/Components/Typography/H4";
import LI from "@/Components/Typography/LI";
import P from "@/Components/Typography/P";
import UL from "@/Components/Typography/UL";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function PrivacyPolicy({ auth }: PageProps) {
  return (
    <>
      <Head title="Privacy Policy" />
      <GuestAuthLayout user={auth.user} header="Privacy Policy">
        <Content />
      </GuestAuthLayout>
    </>
  );
}

function Content() {
  return (
    <section className="mx-auto space-y-3 mt-6 w-11/12 md:w-10/12">
      <header>
        <H2>
          Privacy Policy for <AppName />
        </H2>

        <P>
          At <AppName />, accessible from www.laptop-pos.com, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Laptop POS and how we use it.
        </P>

        <P>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </P>

        <P>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in <AppName />. This policy is not applicable to
          any information collected offline or via channels other than this
          website.
        </P>
      </header>

      <section>
        <H4>Consent</H4>

        <P>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </P>
      </section>

      <section>
        <H4>Information we collect</H4>

        <P>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </P>
        <P>
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </P>
        <P>
          When you register for an Account, we may ask for your contact
          information, including items such as name, business name, country,
          city, address, email, and phone number.
        </P>
      </section>

      <section>
        <H4>How we use your information</H4>

        <P>We use the information we collect in various ways, including to:</P>

        <UL>
          <LI>Provide, operate, and maintain our website</LI>
          <LI>Improve, personalize, and expand our website</LI>
          <LI>Understand and analyze how you use our website</LI>
          <LI>Develop new products, services, features, and functionality</LI>
          <LI>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </LI>
          <LI>Send you emails</LI>
          <LI>Find and prevent fraud</LI>
        </UL>
      </section>

      <section>
        <H4>Log Files</H4>

        <P>
          <AppName /> follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services' analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users' movement on the website, and gathering demographic
          information.
        </P>
      </section>
      <section>
        <H4>Advertising Partners Privacy Policies</H4>

        <P>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of <AppName />.
        </P>

        <P>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on <AppName />, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </P>

        <P>
          Note that <AppName /> has no access to or control over these cookies
          that are used by third-party advertisers.
        </P>
      </section>

      <section>
        <H4>Third Party Privacy Policies</H4>

        <P>
          <AppName />
          's Privacy Policy does not apply to other advertisers or websites.
          Thus, we are advising you to consult the respective Privacy Policies
          of these third-party ad servers for more detailed information. It may
          include their practices and instructions about how to opt-out of
          certain options.{" "}
        </P>

        <P>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </P>
      </section>

      <section>
        <H4>CCPA Privacy Rights (Do Not Sell My Personal Information)</H4>

        <P>
          Under the CCPA, among other rights, California consumers have the
          right to:
        </P>
        <P>
          Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </P>
        <P>
          Request that a business delete any personal data about the consumer
          that a business has collected.
        </P>
        <P>
          Request that a business that sells a consumer's personal data, not
          sell the consumer's personal data.
        </P>
        <P>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </P>
      </section>

      <section>
        <H4>GDPR Data Protection Rights</H4>

        <P>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </P>
        <P>
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </P>
        <P>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </P>
        <P>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </P>
        <P>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </P>
        <P>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </P>
        <P>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </P>
        <P>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </P>
      </section>

      <section>
        <H4>Children's Information</H4>

        <P>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </P>

        <P>
          <AppName /> does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </P>
      </section>

      <section>
        <H4>Changes to This Privacy Policy</H4>

        <P>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately, after they are posted on this
          page.
        </P>

        <P>
          Our Privacy Policy was created with the help of the{" "}
          <a href="https://www.termsfeed.com/privacy-policy-generator/">
            Privacy Policy Generator
          </a>
          .
        </P>
      </section>

      <section>
        <H4>Contact Us</H4>

        <P>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us <SupportEmailLink />.
        </P>
      </section>
    </section>
  );
}
