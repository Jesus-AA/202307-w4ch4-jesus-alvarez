import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DisplayNumbers } from './displaynumbers';

describe('Given the component DisplayNumbers', () => {
  describe('When we render it', () => {
    const number = 667359961;
    render(<DisplayNumbers></DisplayNumbers>);
    test('It should display the numbers: 667359961 in the document', () => {
      const element = screen.getByText(number);
      expect(element).toBeInTheDocument();
    });
  });
});
