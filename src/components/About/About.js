import { StyledAbout } from './About.styled';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (<>
    <Helmet>
      <title>About · OptomRx</title>
      <meta name="description" content="OptomRx, created in 2021, is a new web app for Australian optometrists to write therapeutic prescriptions online. Learn more about us here." />
      <link rel="canonical" href="/about" />
    </Helmet>
    <StyledAbout>
      <h2 className="About__heading">
        Learn more about OptomRx
      </h2>

      <section className="About__section">
        <h3>The OptomRx app</h3>
        <p>
          OptomRx is a web application designed to help Australian Optometrists write therapeutic prescriptions. The ultimate goal of OptomRx is to streamline the prescription writing process as much as possible, and avoid awkward time wasting with traditional handwritten prescriptions.
        </p>
        <p>
          To achieve this, OptomRx provides a number of <a href="/features">features</a> that not only speed up prescription writing, but help improve accuracy and professionalism of scripts. Right now you are viewing the OptomRx public website. The OptomRx web application is accessible to registered users only, and therefore requires you to <a href="/signup">create an account.</a>
        </p>
        <p>
          For those interested in the more technical details behind OptomRx, I encourage you to explore the <a href="https://github.com/daniel-moderiano/optom-rx">OptomRx GitHub repository</a>. OptomRx is an open source project, and so welcomes any contributions!
        </p>
      </section>

      <section className="About__section">
        <h3>Development</h3>
        <p>OptomRx was developed largely by me - Daniel Moderiano. I am an Australian Optometrist, and Web Developer. You can find out more about my optometry work on my <a href="https://www.linkedin.com/in/danielmoderiano/">LinkedIn profile</a>, and more about my web development work on my <a href="https://www.danielmoderiano.com/">personal portfolio</a>. I am currently the sole maintainer, and main contributor of the project.</p>
        <p>The development process was not possible however, without the help of many of my optometry colleagues, who provided real-world feedback and suggestions for improvements. A special mention also goes to <a href="https://www.linkedin.com/in/sarah-smoker-538b74242/">Sarah Smoker</a>, a dispensing colleague, who delivered much of the design inspiration for OptomRx, as well as endless QA testing and revisions of every feature.</p>
      </section>

      <section className="About__section">
        <h3>Future directions</h3>
        <p>The current state of OptomRx is healthy. The key features are in place and work well. Of course there are new medications and PBS revisions happening all the time. For this reason, I endeavour to update OptomRx monthly with any relevant optometrical PBS changes.</p>
        <p>There are still some additions that I would like to make, both user-facing and behind the scenes. As the solo developer on the project however, these things will take time. Regardless, I hope to keep OptomRx going for as long as it sees continued use in the community.</p>
      </section>
    </StyledAbout>
  </>);
};

export default About;
