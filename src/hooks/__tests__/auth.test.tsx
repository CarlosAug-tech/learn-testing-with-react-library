import { render } from '@testing-library/react';
import AppProvider from '..';
import api from '../../services/api';
import { AuthContext, AuthProvider } from '../auth';

jest.mock('../../services/api');

const credentialsSignUp = {
  name: '',
  email: '',
  password: '',
};

describe('', () => {
  it('should ', () => {
    render(
      <AppProvider>
        <AuthProvider />
      </AppProvider>,
    );
  });
  it('should ', () => {
    const signIn = jest.fn();
    const signUp = jest.fn();
    const signOut = jest.fn();
    const user = {
      id: '',
      name: '',
      email: '',
    };

    render(<AuthContext.Provider value={{ signIn, signUp, signOut, user }} />);
  });
});
