import { StyledReleaseNotes } from './ReleaseNotes.styled';
import { Helmet } from 'react-helmet-async';

const ReleaseNotes = () => {
  return (<>
    <Helmet>
      <title>Release Notes · OptomRx</title>
      <meta name="description" content="Check in regularly for major release notes and important news about OptomRx, including monthly PBS changes and new additions to the web app."/>
      <link rel="canonical" href="/release-notes" />
    </Helmet>
    <StyledReleaseNotes>
      Coming soon!
    </StyledReleaseNotes>
  </>);
};

export default ReleaseNotes;
