import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../../../components/ButtonModule/Button';
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {
  it('renders a button with the provided theme', () => {
    render(<Button theme="primary">Click Me</Button>);

    const button = screen.getByText('Click Me');

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('start-game__button--primary');
  });

  it('calls the provided onClick function when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled is true', () => {
    render(<Button disabled>Click Me</Button>);

    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });
});
