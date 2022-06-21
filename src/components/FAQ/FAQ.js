import { StyledFAQ } from "./FAQ.styled";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (<>
    <Helmet>
      <title>FAQ · OptomRx</title>
      <meta name="description" content="Read through a collection of common questions about OptomRx, and learn more about how it can help you write faster, better prescriptions." />
      <link rel="canonical" href="/faq" />
    </Helmet>
    <StyledFAQ>
      <h2 className="FAQ__heading">
        Frequently Asked Questions
      </h2>

      <section className="FAQ__section">
        <p className="FAQ__paragraph">
          OptomRx is committed to providing quality services to you and this policy outlines how your Personal Information is collected, used, and shared when you visit optomrx.net (the “Site”).
        </p>
        <ul className="FAQ__list">
          <li className="FAQ__list-item">
            <a href="#Q1" className="FAQ__link">How do I keep records of scripts I've written for auditing purposes?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#" className="FAQ__link">How is patient information handled in OptomRx?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#" className="FAQ__link">How can I find a script that I've written for a certain patient?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#" className="FAQ__link">Hello there</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#" className="FAQ__link"></a>
          </li>
          <li className="FAQ__list-item">
            <a href="#" className="FAQ__link"></a>
          </li>
          <li className="FAQ__list-item">
            <a href="#" className="FAQ__link"></a>
          </li>
        </ul>
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

      <section className="FAQ__responses">
        <article className="FAQ__response">
          <h3 id="Q1" className="FAQ__question-title">
            Why do we collect Personal Information?
          </h3>
          <p className="FAQ__paragraph">
            We collect your Personal Information for the primary purpose of providing our services to you. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure.
          </p>
        </article>
      </section>
    </StyledFAQ>
  </>);
};

export default FAQ;
