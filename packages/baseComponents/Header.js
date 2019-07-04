import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import HeadIndex from "../head/HeadIndex";

/* styling */

const Container = styled("div")`
  display: flex;

  @media (max-width: 480px) {
    padding: 10px;
    flex-direction: column;
  }

  a {
    text-decoration: none;

    & :hover {
      cursor: pointer;
    }
  }
`;

const Title = styled("a")`
  font-size: 38px;

  @media (max-width: 480px) {
    font-size: 26px;
    margin: 0 auto;
  }
`;

const NavBar = styled("div")`
  ul {
    list-style: none;
    display: flex;

    @media (max-width: 480px) {
      padding-inline-start: 0;
    }

    li {
      margin: 0 14px;

      @media (max-width: 480px) {
        padding: 0;
        flex-direction: column;
        align-content: center;
        line-height: 5;
      }

      a {
        font-size: 16px;

        & :hover {
          text-decoration: underline;
          text-decoration-color: white;
        }
      }
    }
  }
`;

const Header = () => (
  <Container>
    <HeadIndex />
    <Link href="/">
      <Title>TEAM HEALTH CHECKER</Title>
    </Link>
    <NavBar>
      <ul>
        <li>
          <Link href="/createRoom">
            <a>Create Room</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/reports">
            <a>Reports</a>
          </Link>
        </li>
      </ul>
    </NavBar>
  </Container>
);

export default Header;
