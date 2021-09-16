import { render, fireEvent } from '@testing-library/react';
import Home from '../../Home';

describe('', () => {
  it('should ', () => {
    const { getByTestId } = render(<Home />);

    const formElement = getByTestId('main-home');

    expect(formElement).toBeInTheDocument();
  });
});
