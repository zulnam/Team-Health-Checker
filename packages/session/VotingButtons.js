import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-top: 40px;
    justify-content: space-evenly;
  }
`;

const VottingButton = styled.div`
  margin: 0 10px;
  width: 50px;
  height: 50px;
background-image: url('../../static/thumbs/${props => props.image}.png');
  background-size: 50px;
  background-repeat: no-repeat;


  & :hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    margin: 0 20px;
    /* width: 100px;
    height: 100px; */
  }
`;

const VotingButtons = () => (
  <Container>
    <VottingButton image="greenthumb" />
    <VottingButton image="amberthumb" />
    <VottingButton image="redthumb" />
  </Container>
);

export default VotingButtons;
