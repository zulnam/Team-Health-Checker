import React from 'react';
import { withRouter } from 'next/router';
import Header from '../packages/baseComponents/Header';
import MainContainer from '../packages/baseComponents/MainContainer';
import SessionController from '../packages/session/SessionController';
import styled from '@emotion/styled';
import theme from '../packages/templates/theme';

const RoomTitleContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: ${theme.sizes.sm};
`;

const GeneratedSession = withRouter((props: any) => (
  <RoomTitleContainer>
    <h2>{props.router.query.teamName}</h2>
    <h2>{props.router.query.roomName}</h2>
  </RoomTitleContainer>
));

const Room = () => (
  <MainContainer>
    <Header />
    <GeneratedSession />
    <SessionController />
  </MainContainer>
);

export default Room;
