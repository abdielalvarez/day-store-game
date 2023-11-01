import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MultipleButton from '../../../components/ButtonModule/MultipleButton';
import '@testing-library/jest-dom/extend-expect';

describe('MultipleButton component', () => {
  const buttonsOptions = [
    {
      dissapearButton: false,
      onClick: jest.fn(),
      theme: 'primary',
      disabled: false,
      label: 'Button 1',
    },
    {
      dissapearButton: false,
      onClick: jest.fn(),
      theme: 'secondary',
      disabled: true,
      label: 'Button 2',
    },
  ];

  it('renders buttons with provided options', () => {
    render(<MultipleButton buttonsOptions={buttonsOptions} />);
    const button1 = screen.getByText('Button 1');
    const button2 = screen.getByText('Button 2');

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button1).toHaveClass('start-game__button--primary');
    expect(button2).toHaveClass('start-game__button--secondary');
    expect(button2).toBeDisabled();
  });

  it('calls the provided onClick function when a button is clicked', () => {
    render(<MultipleButton buttonsOptions={buttonsOptions} />);
    const button1 = screen.getByText('Button 1');
    fireEvent.click(button1);
    expect(buttonsOptions[0].onClick).toHaveBeenCalledTimes(1);
  });

  it('does not render a button with dissapearButton set to true', () => {
    render(<MultipleButton buttonsOptions={buttonsOptions} />);
    const button3 = screen.queryByText('Button 3');
    expect(button3).toBeNull();
  });
});
