import React from 'react';
import Header from '../packages/baseComponents/Header';
import MainContainer from '../packages/baseComponents/MainContainer';

const About = () => (
  <MainContainer>
    <Header />
    <div>
      <p>
        Welcome to the Team Health Checker tool. Please see the table of
        contents below for further information.
        <ol>
          <li>Initiating a room</li>
          <li>Using a room as an admin</li>
          <li>Using a room as a user</li>
          <li>Viewing reports</li>
          <li>Exporting reports</li>
        </ol>
      </p>
    </div>
  </MainContainer>
);

export default About;
