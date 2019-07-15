import React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function() {
      const wrap = mount(<IndexPage />);
    });
  });
});
