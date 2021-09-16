import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';

describe('', () => {
  beforeEach(() => {
    const renderWithRouter = (ui: any, { route = '/' } = {}) => {
      window.history.pushState({}, 'Test Page', route);

      return render(ui, { wrapper: BrowserRouter });
    };

    renderWithRouter(<App />);
  });
  afterEach(() => {
    cleanup();
  });
  it('Home Page', () => {
    const homePage = screen.getByTestId('main-home');
    expect(homePage).toBeInTheDocument();
  });
});
