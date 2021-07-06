import { shallow } from 'enzyme';
import HeadIndex from '../HeadIndex';

describe('head metadata', () => {
  it('loads all metadata on render', () => {
    const wrapper = shallow(<HeadIndex />);

    // title tag
    expect(
      wrapper.containsMatchingElement(<title>Team Health Checker</title>)
    ).toBe(true);

    // viewport meta tag
    expect(
      wrapper.containsMatchingElement(
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      )
    ).toBe(true);

    // link tag
    expect(
      wrapper.containsMatchingElement(
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
      )
    ).toBe(true);
  });
});
