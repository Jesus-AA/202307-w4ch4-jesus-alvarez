import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Info } from './info';

describe('When the component Info is called', () => {
  describe('When we render it', () => {
    const text = 'Calling...';
    render(<Info></Info>);
    test('It should display the text Calling... in the document', () => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument;
    });
  });
});
