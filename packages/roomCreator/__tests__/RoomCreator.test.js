import { render, fireEvent, screen } from '@testing-library/react';
import RoomCreator from '../RoomCreator';

describe('Room creator functionality', () => {
  it('takes any string for a room name', () => {
    render(<RoomCreator />);
    const input = screen.getByTestId('roomName');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveAttribute('value', 'test');
  });

  it('can change team from dropdown', () => {
    render(<RoomCreator />);
    const dropDown = screen.getByTestId('teamName');

    fireEvent.change(dropDown, { target: { value: 'Browse' } });
    expect(dropDown[1].selected).toBeTruthy();
  });
});
