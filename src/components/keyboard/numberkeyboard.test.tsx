import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NumberKeyboard } from './numberkeyboard';

describe('When the component NumberKeyboard is called', () => {
  describe('When we render it', () => {
    const number = 0;
    render(<NumberKeyboard></NumberKeyboard>);
    test('It should render buttton with the number 0', () => {
      const element = screen.getByText(number);
      expect(element).toBeInTheDocument();
    });
  });
});
