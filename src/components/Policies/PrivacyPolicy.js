import { StyledPolicy } from "./Policies.styled";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PrivacyPolicy = ({ setPage }) => {
  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage(null);
  }, [setPage]);

  return (<>
    <Helmet>
      <title>Privacy Policy · OptomRx</title>
      <meta name="description" content="A new way for optometrists to professionally create and manage therapeutic prescriptions online."/>
      <link rel="canonical" href="/privacy-policy" />
    </Helmet>
    <StyledPolicy className="Privacy">
      <h2 className="Privacy__heading">
        Privacy Policy
      </h2>

      <p className="Policy__date">Last Updated February 1st, 2022</p>

      <section className="Privacy__section">
        <p className="Privacy__paragraph">
          OptomRx is committed to providing quality services to you and this policy outlines how your Personal Information is collected, used, and shared when you visit optomrx.net (the “Site”).
        </p>
        <p className="Privacy__paragraph">
          We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Privacy Act). The APPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
        </p>
        <p className="Privacy__paragraph">
          A copy of the <a href="https://www.oaic.gov.au/privacy/australian-privacy-principles.">Australian Privacy Principles</a> may be obtained from the website of The Office of the Australian Information Commissioner using the link provided.
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          What is Personal Information and what do we collect?
        </h3>
        <p className="Privacy__paragraph">
          When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically collected information as “Device Information.”
        </p>
        <p className="Privacy__paragraph">
          We collect Device Information using the following technologies:
        </p>
        <ul className="Privacy__list">
          <li className="Privacy__list-item">
            “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. Follow the link provided for more <a href=" https://www.allaboutcookies.org">information about cookies, and how to disable cookies.</a> 
          </li>
          <li className="Privacy__list-item">
            “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
          </li>
          <li className="Privacy__list-item">
            “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
          </li>
        </ul>
        <p className="Privacy__paragraph">
          Additionally, when you create and account, or add prescriber details for the Site, we collect certain information from you, including your name, email address, prescriber number, and location of practice.  We refer to this information as “User Information.”
        </p>
        <p className="Privacy__paragraph">
          When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and User Information. Personal information does not refer to Patient Information; this is described in the relevant “Patient Information” section later in the policy.
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          Why do we collect Personal Information?
        </h3>
        <p className="Privacy__paragraph">
          We collect your Personal Information for the primary purpose of providing our services to you. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. 
        </p>
        <p className="Privacy__paragraph">
          When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          How do we use your Personal Information?
        </h3>
        <p className="Privacy__paragraph">
          We use the User Information that we collect to identify you and allow you to log in and out of the Site, personalise your experience using the Site, and to create templated information that is printed on physical prescription forms. 
        </p>
        <p className="Privacy__paragraph">
          Additionally, we may use this User Information to communicate with you and, when in line with the preferences you have shared with us, provide you with information relating to our services.
        </p>
        <p className="Privacy__paragraph">
          We use the Device Information that we collect to help us generally improve and optimize our Site (for example, by generating analytics about how our users browse and interact with the Site).
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          Third Parties
        </h3>
        <p className="Privacy__paragraph">
          Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          Security of Personal Information
        </h3>
        <p className="Privacy__paragraph">
          Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorised access, modification or disclosure.
        </p>
        <p className="Privacy__paragraph">
          When you create an account with the Site, we will maintain your Personal Information for our records unless and until you ask us to delete this information.
        </p>
        <p className="Privacy__paragraph">
          When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. 
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          Disclosure of Personal Information
        </h3>
        <p className="Privacy__paragraph">
          We share your Personal Information with third parties to help us use your Personal Information, as described above. We use Google Analytics to help us understand how our customers use the Site--you can read more about <a href="https://www.google.com/intl/en/policies/privacy/.">how Google uses your Personal Information</a>. You can also <a href="https://tools.google.com/dlpage/gaoptout">opt-out of Google Analytics.</a>  
        </p>
        <p className="Privacy__paragraph">
          We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          Access to your Personal Information
        </h3>
        <p className="Privacy__paragraph">
          You may request access to, or correction of, documents that contain your personal information which are in our possession. For information on how to make a request for access or correction, please contact us via the details below.
        </p>
        <p className="Privacy__paragraph">
          In order to protect your Personal Information we may require identification from you before releasing the requested information.
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          Patient Information
        </h3>
        <p className="Privacy__paragraph">
          When you write prescriptions with the Site, you will generally require Personal Information belonging to your patients (we refer to this as “Patient Information). This can include names, addresses, age, and Medicare details. Patient Information is entered into web forms on the Site, but does not leave your local device when forms are submitted (i.e., is not sent anywhere online). We do not store, share, or save this Patient Information. We do not share or source Patient Information with or from third parties. 
        </p>
        <p className="Privacy__paragraph">
          While writing a prescription on the Site, Patient Information is used only to generate a printable template for use with a physical prescription form. Once a prescription has been finished, or any web page on the Site is refreshed, any and all Patient Information is discarded from the Site. There is no method by which to save or recover Patient Information through the Site.
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          Changes
        </h3>
        <p className="Privacy__paragraph">
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
        </p>
      </section>

      <section className="Privacy__section">
        <h3 className="Privacy__subheading">
          Contact Us
        </h3>
        <p className="Privacy__paragraph">
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at mail@optomrx.net.
        </p>
      </section>
    </StyledPolicy>
  </>);
};

export default PrivacyPolicy;
