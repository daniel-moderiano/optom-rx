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

      <div className="FAQ__section">
        <p className="FAQ__paragraph">
          OptomRx is committed to providing quality services to you and this policy outlines how your Personal Information is collected, used, and shared when you visit optomrx.net (the “Site”).
        </p>
        <ul className="FAQ__list">
          <li className="FAQ__list-item">
            <a href="#Q1" className="FAQ__link">What is OptomRx exactly?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q2" className="FAQ__link">Why can't I just keep handwriting my scripts?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q3" className="FAQ__link">Is OptomRx free to use?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q4" className="FAQ__link">How do I get started with OptomRx?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q5" className="FAQ__link">Can I use OptomRx anywhere I work?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q6" className="FAQ__link">How is patient information handled in OptomRx?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q7" className="FAQ__link">How do I keep records of scripts I've written for auditing purposes?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q8" className="FAQ__link">How can I find a script that I've written for a certain patient?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q9" className="FAQ__link">Can I use OptomRx to write non-optometric prescriptions?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q10" className="FAQ__link">Do I have to be an optometrist to use OptomRx?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q11" className="FAQ__link">I would like a feature added/change to OptomRx - where can I request this?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q12" className="FAQ__link">Who made OptomRx?</a>
          </li>
          <li className="FAQ__list-item">
            <a href="#Q13" className="FAQ__link">How can I support OptomRx?</a>
          </li>

        </ul>
      </div>

      <div className="FAQ__responses">

        <article className="FAQ__response">
          <h3 id="Q1" className="FAQ__question-title">
            Why do we collect Personal Information?
          </h3>
          <p className="FAQ__paragraph">
            We collect your Personal Information for the primary purpose of providing our services to you. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure.
          </p>
        </article>
      </div>
    </StyledFAQ>
  </>);
};

export default FAQ;
