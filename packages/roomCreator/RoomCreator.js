import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const FormContainer = styled.form`
  margin: 20px 0 0 40px;
`;

const FormField = styled.article`
  margin: 10px 0;

  & select {
    margin-left: 30px;
    width: 151px;

    @media (min-width: 768px) {
      width: 213px;
    }
  }

  & input,
  select {
    height: 24px;
    font-size: 14px;

    @media (min-width: 768px) {
      height: 30px;
      font-size: 20px;
    }
`;

export default class RoomCreator extends React.Component {
  state = {
    roomName: "",
    teamName: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <FormContainer>
          <FormField>
            <label htmlFor="roomName">Room Name: </label>
            <input
              type="text"
              name="roomName"
              value={this.state.roomName}
              onChange={this.handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="teamName">Tribe: </label>
            <select
              name="teamName"
              value={this.state.teamName}
              onChange={this.handleChange}
            >
              <option value="">Select a Team</option>
              <option value="Browse">Browse</option>
              <option value="Trade">Trade</option>
              <option value="Buy">Buy</option>
            </select>
          </FormField>

          <Link
            href={`/room?roomName=${this.state.roomName}&teamName=${
              this.state.teamName
            }`}
          >
            <a>Create Room</a>
          </Link>
        </FormContainer>
      </div>
    );
  }
}
