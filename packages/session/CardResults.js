import React from "react";
import styled from "@emotion/styled";

const ResultsContainer = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
  flex-direction: column;
  justify-content: unset;
`;

const IndividualSection = styled.div`
  margin: 10px 0;
`;

const IndividualValue = styled.span`
  font-size: 32px;
  position: relative;
  top: 8px;
  left: 10px;
  float: left;

  @media (min-width: 768px) {
    font-size: 42px;
    top: 2px;
  }
`;

const ResultIcons = styled.div`
  margin: 10px 0;
  width: 30px;
  height: 30px;
background-image: url('../../static/thumbs/${props => props.image}.png');
  background-size: 30px;
  background-repeat: no-repeat;
  float: left;


  media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const CardResults = () => (
  <div>
    <h3>Results:</h3>
    <ResultsContainer>
      <IndividualSection>
        <ResultIcons image="greenthumb" />
        <IndividualValue>5</IndividualValue>
      </IndividualSection>
      <IndividualSection>
        <ResultIcons image="amberthumb" />
        <IndividualValue>3</IndividualValue>
      </IndividualSection>
      <IndividualSection>
        <ResultIcons image="redthumb" />
        <IndividualValue>2</IndividualValue>
      </IndividualSection>
    </ResultsContainer>
  </div>
);

export default CardResults;
