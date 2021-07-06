import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '../templates/theme';

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
  }
`;

const RoomCreator = () => {
  const [roomName, setRoomName] = useState('');
  const [teamName, setTeamName] = useState('');

  const handleChange = (e: any) => {
    if (e.target.name === 'roomName') {
      setRoomName(e.target.value);
    } else {
      setTeamName(e.target.value);
    }
  };

  return (
    <div>
      <FormContainer>
        <FormField>
          <label htmlFor="roomName">Room Name: </label>
          <input
            data-testid="roomName"
            type="text"
            name="roomName"
            value={roomName}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="teamName">Tribe: </label>
          <select
            data-testid="teamName"
            name="teamName"
            value={teamName}
            onChange={handleChange}
          >
            <option value="">Select a Team</option>
            <option value="Browse">Browse</option>
            <option value="Trade">Trade</option>
            <option value="Buy">Buy</option>
          </select>
        </FormField>

        <Link href={`/room?roomName=${roomName}&teamName=${teamName}`}>
          <a>Create Room</a>
        </Link>
      </FormContainer>
    </div>
  );
};

export default RoomCreator;
