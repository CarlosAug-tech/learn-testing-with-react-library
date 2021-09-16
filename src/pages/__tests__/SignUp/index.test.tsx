import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { AuthContext } from '../../../hooks/auth';
import SignUp from '../../SignUp';

describe('', () => {
  it('should verify if form exists', () => {
    const { getByTestId } = render(<SignUp />);

    const formElement = getByTestId('form-signUp');

    expect(formElement).toBeInTheDocument();
  });
  it('should register user', async () => {
    const signIn = jest.fn();
    const signUp = jest.fn();
    const signOut = jest.fn();
    const user = {
      id: '',
      name: '',
      email: '',
    };
    const { getByTestId } = render(
      <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
        <SignUp />
      </AuthContext.Provider>,
    );

    const formElement = getByTestId('form-signUp');
    const nameInputElement = getByTestId('form-name');
    const emailInputElement = getByTestId('form-email');
    const passwordInputElement = getByTestId('form-password');

    await act(async () => {
      await fireEvent.change(nameInputElement, {
        target: { value: 'jose' },
      });
    });

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
    expect(nameInputElement.value).toBe('jose');
    // @ts-ignore
    expect(emailInputElement.value).toBe('jose@gmail.com');
    // @ts-ignore
    expect(passwordInputElement.value).toBe('1234567');

    await act(async () => {
      await fireEvent.submit(formElement);
    });

    expect(signUp).toBeCalled();
  });
});
