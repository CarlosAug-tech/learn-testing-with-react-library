import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

export interface IUserProps {
  id: string;
  name: string;
  email: string;
}

export interface ICredentialsSignInProps {
  email: string;
  password: string;
}

export interface ICredentialsSignUpProps {
  name: string;
  email: string;
  password: string;
}

interface IAuthStateProps {
  user: IUserProps;
  token: string;
}

interface IAuthContextProps {
  user: IUserProps;
  signIn(credentials: ICredentialsSignInProps): Promise<void>;
  signUp(credentials: ICredentialsSignUpProps): Promise<void>;
  signOut(): Promise<void>;
}

export const AuthContext = createContext<IAuthContextProps>(
  {} as IAuthContextProps,
);

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [data, setData] = useState<IAuthStateProps>(() => {
    const token = localStorage.getItem('tokenMock');
    const user = localStorage.getItem('userMock');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthStateProps;
  });

  const signIn = useCallback(async (credentials: ICredentialsSignInProps) => {
    const { email, password } = credentials;

    const response = await api.post('/sessions', { email, password });

    const { user, token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({
      token,
      user,
    });
    localStorage.setItem('tokenMock', token);
    localStorage.setItem('userMock', JSON.stringify(user));
    history.push('/dashboard');
  }, []);

  const signUp = useCallback(async (credentials: ICredentialsSignUpProps) => {
    const { email, name, password } = credentials;

    await api.post('/user', {
      email,
      name,
      password,
    });

    history.push('/login');
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('tokenMock');
    localStorage.removeItem('userMock');

    history.push('/');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('');
  }

  return context;
}

export { AuthProvider, useAuth };
