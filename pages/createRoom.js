import Header from "../packages/baseComponents/Header";
import MainContainer from "../packages/baseComponents/MainContainer";
import RoomCreator from "../packages/roomCreator/RoomCreator";
import React from "react";

const CreateRoom = () => (
  <MainContainer>
    <Header />
    <RoomCreator />
  </MainContainer>
);

export default CreateRoom;
