import React from "react";
import styled from "@emotion/styled";

const User = styled.p`
  font-style: italic;
  color: #bfbfbf;
  padding: 0 10px;
`;

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const UserList = () => (
  <div>
    <h3>Yet to vote:</h3>
    <List>
      <User>Valentin;</User>
      <User>Dom;</User>
      <User>Potter;</User>
      <User>Krupa;</User>
      <User>Artur;</User>
      <User>Hassan;</User>
      <User>Fabian;</User>
      <User>Tom;</User>
      <User>Amber;</User>
      <User>Louie;</User>
      <User>Valentin.</User>
      <User />
    </List>
  </div>
);

export default UserList;
