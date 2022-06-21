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
            <a href="#Q12" className="FAQ__link">How can I support OptomRx?</a>
          </li>

        </ul>
      </div>

      <div className="FAQ__responses">

        <article className="FAQ__response">
          <h3 id="Q1" className="FAQ__question-title">
            What is OptomRx exactly?
          </h3>
          <p className="FAQ__paragraph">
            OptomRx is a web app that you can use to write computerised therapeutic prescriptions for your patients, rather than handwriting them. It is intended to replace the old script pads and make the prescription-writing process faster, easier, more accurate, and more professional.
          </p>
        </article>

        <article className="FAQ__response">
          <h3 id="Q2" className="FAQ__question-title">
            Why can't I just keep handwriting my scripts?
          </h3>
          <p className="FAQ__paragraph">
            There is no need for you to toss your script pad away if you're happy handwriting scripts (in fact, it's a good idea to keep one handy as backup even if you do use OptomRx). The primary goal of OptomRx is to minimise the time you spend writing therapeutic scripts, and remove the annoyances and guesswork involved with PBS scripts and their various requirements.
          </p>
        </article>

        <article className="FAQ__response">
          <h3 id="Q3" className="FAQ__question-title">
            Is OptomRx free to use?
          </h3>
          <p className="FAQ__paragraph">
            Yes! OptomRx is completely free to use. If you'd like to financially support the project, you can <a href="https://www.buymeacoffee.com/optomrx">buy me a coffee</a>. But rest assured, this is not another paid subscription you have to add to the list.
          </p>
        </article>

        <article className="FAQ__response">
          <h3 id="Q4" className="FAQ__question-title">
            How do I get started with OptomRx?
          </h3>
          <p className="FAQ__paragraph">
            Getting started is simple - first <a href="/signup">create a new account</a>, then navigate to the "Prescribers" page. From here you can enter your prescriber details for any practices you work with; these will appear at the top of your scripts as per normal. Once your prescriber details are saved, you can start writing scripts!
          </p>
          <p className="FAQ__paragraph">
            It is also strongly recommended that new users to write some "fake" scripts using a fake name (or your own name) for their most commonly used medications. This will let you save these scripts as favourites (but won't save your fake patient details) so you can re-prescribe these common medications with one click.
          </p>
        </article>

        <article className="FAQ__response">
          <h3 id="Q5" className="FAQ__question-title">
            Can I use OptomRx anywhere I work?
          </h3>
          <p className="FAQ__paragraph">
            Absolutely. One of the best features of OptomRx is the ability to add multiple prescriber details to your account. By creating a prescriber for every one of your practices, you can simply select the current practice you're working in when prescribing from that practice.
          </p>
          <p className="FAQ__paragraph">
            Bear in mind though - you will need computerised PBS forms for your prescriptions, so make sure you've got some on you, or stock each practice you're working in with a few! These can be ordered in bulk from <a href="https://www.servicesaustralia.gov.au/pbs-and-rpbs-stationery-for-optometrists?context=22851">Services Australia</a>.
          </p>
        </article>

        <article className="FAQ__response">
          <h3 id="Q6" className="FAQ__question-title">
            How is patient information handled in OptomRx?
          </h3>
          <p className="FAQ__paragraph">
            Patient information <strong>never</strong> leaves the computer you are writing the prescription on, nor does it persist once you've finished writing a script. What exactly does this mean? It means that patient information is:
            <ul>
              <li>Never saved on a server or on even on your computer</li>
              <li>Never sent across the internet to another computer</li>
              <li>No longer accessible once you've finished writing a script</li>
            </ul>
          </p>
          <p>OptomRx was never created with the intention of being a patient database, but instead a simple tool for writing prescriptions. For this reason, the control of patient information is always with the user and not with OptomRx.</p>
        </article>

        <article className="FAQ__response">
          <h3 id="Q8" className="FAQ__question-title">
            How can I find a script that I've written for a certain patient?
          </h3>
          <p className="FAQ__paragraph">
            Because patient data is not attached to saved scripts, it is impossible to link a previous script with a patient using OptomRx. You might however add the Script ID from an OptomRx script to the patient's clinical record, creating a path back to their script on OptomRx. Alternatively, you might compare the date and time the patient was seen with any script you wrote at that time on OptomRx to try and connect them that way. But you cannot look up a patient via OptomRx.
          </p>

        </article>


        <article className="FAQ__response">
          <h3 id="Q7" className="FAQ__question-title">
            How do I keep records of scripts I've written for auditing purposes?
          </h3>
          <p className="FAQ__paragraph">
            All scripts on OptomRx will optionally include a physical prescriber copy in the bottom-left tear-off section of the PBS script paper. These prescriber copies will include necessary PBS authority details for those scripts. You can keep these copies for your records as needed.
          </p>
        </article>

        <article className="FAQ__response">
          <h3 id="Q9" className="FAQ__question-title">
            Can I use OptomRx to write non-optometric prescriptions?
          </h3>
          <p className="FAQ__paragraph">
            You can write any script you wish using OptomRx, however OptomRx does not provide any support for non-optometric items, as this is not the intended use of the app.
          </p>

        </article>


        <article className="FAQ__response">
          <h3 id="Q10" className="FAQ__question-title">
            Do I have to be an optometrist to use OptomRx?
          </h3>
          <p className="FAQ__paragraph">
            Anyone can sign up for, and use OptomRx. However, without a valid prescriber number, you cannot write any legally dispensable scripts. Other health professionals may write custom scripts using OptomRx, but be aware OptomRx will automatically tick the 'Optometrist' box on PBS forms.
          </p>

        </article>

        <article className="FAQ__response">
          <h3 id="Q11" className="FAQ__question-title">
            I would like a feature added/change to OptomRx - where can I request this?
          </h3>
          <p className="FAQ__paragraph">
            You can <a href="https://github.com/daniel-moderiano/optom-rx/issues/new?assignees=&labels=&template=bug_report.md&title=">report a bug</a> or <a href="https://github.com/daniel-moderiano/optom-rx/issues/new?assignees=&labels=&template=feature_request.md&title=">request a feature</a> using the GitHub links provided. There are templates to help you explain the bug or feature in detail. This is the preferred method. Alternatively you can <a href="mailto:mail@optomrx.net">email directly</a>.
          </p>
        </article>

        <article className="FAQ__response">
          <h3 id="Q12" className="FAQ__question-title">
            How can I support OptomRx?
          </h3>
          <p className="FAQ__paragraph">
            If you'd like to financially support the project, you can <a href="https://www.buymeacoffee.com/optomrx">buy me a coffee</a>. This directly helps pay for costs associated with hosting OptomRx on an ongoing basis. Alternatively, you can <a href="https://github.com/daniel-moderiano/optom-rx">contribute</a> to the open-source development of OptomRx. Even something as simple as a minor bug report helps immensely.
          </p>
        </article>



      </div>
    </StyledFAQ>
  </>);
};

export default FAQ;
