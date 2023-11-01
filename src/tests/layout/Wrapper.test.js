import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from '../../layout/Wrapper';

describe('Wrapper component', () => {
  it('renders its children', () => {
    render(
      <Wrapper>
        <p>Child 1</p>
      </Wrapper>
    );
  });
});
