import React from 'react';
import styled from '@emotion/styled';
import theme from '../templates/theme';

const ResultsContainer = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: ${theme.sizes.sm};
  }
  flex-direction: column;
  justify-content: unset;
`;

const IndividualSection = styled.div`
  margin: ${theme.sizes.xs} 0;
`;

const IndividualValue = styled.span`
  font-size: 32px;
  position: relative;
  top: 8px;
  left: ${theme.sizes.xs};
  float: left;

  @media (min-width: 768px) {
    font-size: 42px;
    top: 2px;
  }
`;

const ResultIcons: any = styled.div`
  margin: ${theme.sizes.xs} 0;
  width: ${theme.sizes.md};
  height: ${theme.sizes.md};
  background-image: url('../../static/thumbs/${({ image }: any) => image}.png');
  background-size: ${theme.sizes.md};
  background-repeat: no-repeat;
  float: left;


  @media (min-width: 768px) {
    width: ${theme.sizes.xl};
    height: ${theme.sizes.xl};
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
