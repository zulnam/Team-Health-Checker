import { render, fireEvent, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import SessionController from '../SessionController';

describe('SessionController functionality', () => {
  it('can move back and forth between questions', () => {
    render(<SessionController />);

    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByTestId('question-card')).toHaveAttribute(
      'src',
      '/cards/image_2.png'
    );

    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByTestId('question-card')).toHaveAttribute(
      'src',
      '/cards/image_1.png'
    );
  });

  it('throws alert if at first question and trying to go to previous', () => {
    render(<SessionController />);
    const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByTestId('question-card')).toHaveAttribute(
      'src',
      '/cards/image_1.png'
    );
    expect(spy).toHaveBeenCalled();
  });

  it('throws alert if at first last and trying to go to next', () => {
    render(<SessionController />);
    const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    for (let i = 0; i < 16; i++) {
      fireEvent.click(screen.getByText('Next'));
    }

    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByTestId('question-card')).toHaveAttribute(
      'src',
      '/cards/image_15.png'
    );
    expect(spy).toHaveBeenCalled();
  });

  it('can lock and unlock a question', () => {
    render(<SessionController />);

    fireEvent.click(screen.getByTestId('control-voting'));
    expect(screen.getByTestId('control-voting')).toHaveTextContent(
      'Enable voting'
    );

    fireEvent.click(screen.getByTestId('control-voting'));
    expect(screen.getByTestId('control-voting')).toHaveTextContent(
      'Disable voting'
    );
  });
});
