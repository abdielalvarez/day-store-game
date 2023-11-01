import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../components/Text';
import '@testing-library/jest-dom/extend-expect';

describe('Text component', () => {
  it('renders text with default styles', () => {
    render(<Text>Sample Text</Text>);

    const textElement = screen.getByText('Sample Text');

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
    expect(textElement).toHaveStyle('color: #333333');
  });

  it('renders text with custom tag and color', () => {
    render(<Text tag="h2" color="#FF0000">Custom Text</Text>);

    const textElement = screen.getByText('Custom Text');

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H2');
    expect(textElement).toHaveStyle('color: #FF0000');
  });
});
