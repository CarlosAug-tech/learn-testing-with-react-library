import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { AuthContext } from '../../../hooks/auth';
import SignIn from '../../SignIn';

describe('', () => {
  it('should verify if form exists', () => {
    const { getByTestId } = render(<SignIn />);

    const formElement = getByTestId('form-signIn');

    expect(formElement).toBeInTheDocument();
  });
  it('', async () => {
    const signIn = jest.fn();
    const signUp = jest.fn();
    const signOut = jest.fn();
    const user = {
      id: '',
      name: '',
      email: '',
    };
    const { getByTestId } = render(
      <AuthContext.Provider value={{ signIn, signUp, signOut, user }}>
        <SignIn />
      </AuthContext.Provider>,
    );

    const formSignInElement = getByTestId('form-signIn');
    const emailInputElement = getByTestId('form-email');
    const passwordInputElement = getByTestId('form-password');

    await act(async () => {
      await fireEvent.change(emailInputElement, {
        target: { value: 'jose@gmail.com' },
      });
    });
    await act(async () => {
      await fireEvent.change(passwordInputElement, {
        target: { value: '1234567' },
      });
    });

    // @ts-ignore
    expect(emailInputElement.value).toBe('jose@gmail.com');
    // @ts-ignore
    expect(passwordInputElement.value).toBe('1234567');

    await act(async () => {
      await fireEvent.submit(formSignInElement);
    });

    expect(signIn).toBeCalled();
  });
});
