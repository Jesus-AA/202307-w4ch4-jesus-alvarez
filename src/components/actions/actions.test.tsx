import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { UserActions } from './actions';

describe('Given the component UserActions', () => {
  describe('When we render it', () => {
    const text = 'Call';
    render(<UserActions></UserActions>);
    test('It should display the word Call', () => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
