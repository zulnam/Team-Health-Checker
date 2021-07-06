import { useState } from 'react';
import styled from '@emotion/styled';
import UserList from './UserList';
import CardResults from './CardResults';
import VotingButtons from './VotingButtons';
import theme from '../templates/theme';

const ButtonContainer = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-flow: column wrap;
  }
`;

const Button = styled.button`
  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: ${theme.sizes.sm};
    width: 100%;
  }

  height: ${theme.sizes.lg};
  width: 200px;
  margin-right: ${theme.sizes.sm};
  font-size: 17px;
  border-width: 3px;
  border-bottom-width: 4px;
`;

/* TODO: once we get exact images we will not need the position and right attributes */
const ImageContainer = styled.img`
  width: 165%;
  position: relative;
  right: 98px;

  @media (min-width: 768px) {
    width: 640px;
    position: relative;
    right: 155px;
  }
`;

const MainInfo = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SessionController = () => {
  const [votingOpen, setVotingOpen] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(1);

  const browseCards = (e: any) => {
    const direction = e.target.name;
    console.log(direction);

    switch (direction) {
      case 'previous':
        if (questionIndex > 1) {
          setQuestionIndex(questionIndex - 1);
        } else {
          alert('This is the first question!');
        }
        break;
      case 'next':
        if (questionIndex < 15) {
          setQuestionIndex(questionIndex + 1);
          setVotingOpen(true);
        } else {
          alert('This is the last question!');
        }
    }

    console.log(questionIndex);
  };

  const lockUnlockVoting = () => {
    setVotingOpen(!votingOpen);
  };

  return (
    <div>
      <MainInfo>
        <ImageContainer
          src={`/cards/image_${questionIndex}.png`}
          data-testid="question-card"
        />
        {votingOpen ? (
          <div>
            <UserList />
            <VotingButtons />
          </div>
        ) : (
          <CardResults />
        )}
      </MainInfo>
      <ButtonContainer>
        <Button name="previous" onClick={browseCards}>
          Previous
        </Button>
        <Button data-testid="control-voting" onClick={lockUnlockVoting}>
          {votingOpen ? 'Disable' : 'Enable'} voting
        </Button>
        <Button name="next" onClick={browseCards}>
          Next
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default SessionController;
