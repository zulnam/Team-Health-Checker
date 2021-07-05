import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import About from '../about';
import CreateRoom from '../createRoom';
import Index from '../index';
import Room from '../room';

describe('All pages render correctly', () => {
  it('Renders root page', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });

  it('Renders about page', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });

  it('Renders the create room page', () => {
    const { container } = render(<CreateRoom />);
    expect(container).toMatchSnapshot();
  });

  it('Renders the room session page', () => {
    const options = {
      router: {
        query: {
          teamName: 'Test Team',
          roomName: 'Test Room'
        }
      }
    };

    const wrapper = shallow(<Room />, options);
    expect(wrapper).toMatchSnapshot();
  });
});
