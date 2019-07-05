import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import theme from "../templates/theme";

const FormContainer = styled.form`
  margin: ${theme.sizes.sm} 0 0 ${theme.sizes.lg};
`;

const FormField = styled.article`
  margin: ${theme.sizes.xs} 0;

  & select {
    margin-left: ${theme.sizes.md};
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
      height: ${theme.sizes.md};
      font-size: ${theme.sizes.sm};
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
