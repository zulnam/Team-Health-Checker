import Header from '../packages/baseComponents/Header';
import MainContainer from '../packages/baseComponents/MainContainer';

const About = () => (
  <MainContainer>
    <Header />
    <div>
      <p>
        Welcome to the Team Health Checker tool. Please see the table of
        contents below for further information.
      </p>
      <ol>
        <li>Initiating a room</li>
        <li>Using a room as an admin</li>
        <li>Using a room as a user</li>
        <li>Viewing reports</li>
        <li>Exporting reports</li>
      </ol>
    </div>
  </MainContainer>
);

export default About;
