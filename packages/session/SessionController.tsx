import React from 'react';
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

export default class SessionController extends React.Component {
  state = {
    voting: true,
    questionIndex: 1
  };

  browseCards = (e: any) => {
    const direction = e.target.name;
    console.log(direction);

    switch (direction) {
      case 'previous':
        if (this.state.questionIndex > 1) {
          this.setState((prevState: any) => {
            const newIndex = prevState.questionIndex - 1;
            return { questionIndex: newIndex };
          });
        } else {
          alert('This is the first question!');
        }
        break;
      case 'next':
        if (this.state.questionIndex <= 15) {
          this.setState((prevState: any) => {
            const newIndex = prevState.questionIndex + 1;
            return { questionIndex: newIndex, voting: true };
          });
        } else {
          alert('This is the last question!');
        }
    }

    console.log(this.state.questionIndex);
  };

  lockUnlockVoting = () => {
    this.setState((prevState: any) => ({
      voting: !prevState.voting
    }));
    console.log(this.state.voting);
  };

  render() {
    return (
      <div>
        <MainInfo>
          <ImageContainer
            src={`/static/cards/image_${this.state.questionIndex}.png`}
          />
          {this.state.voting ? (
            <div>
              <UserList />
              <VotingButtons />
            </div>
          ) : (
            <CardResults />
          )}
        </MainInfo>
        <ButtonContainer>
          <Button name="previous" onClick={this.browseCards}>
            Previous
          </Button>
          <Button onClick={this.lockUnlockVoting}>
            {this.state.voting ? 'Disable' : 'Enable'} Voting
          </Button>
          <Button name="next" onClick={this.browseCards}>
            Next
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}
