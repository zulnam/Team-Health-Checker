import styled from '@emotion/styled';
import theme from '../templates/theme';

const Container = styled.div`
  margin: ${theme.sizes.sm} 0 ${theme.sizes.md} 0;
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-top: ${theme.sizes.lg};
    justify-content: space-evenly;
  }
`;

const VottingButton: any = styled.div`
  margin: 0 ${theme.sizes.xs};
  width: ${theme.sizes.xl};
  height: ${theme.sizes.xl};
  background-image: url('/thumbs/${(props: any) => props.image}.png');
  background-size: ${theme.sizes.xl};
  background-repeat: no-repeat;


  & :hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    margin: 0 ${theme.sizes.sm};
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
