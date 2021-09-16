import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import Button from '../../component/Button';
import Input from '../../component/Input';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      signIn({ email, password });
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} data-testid="form-signIn">
        <Input
          data-testid="form-name"
          type="text"
          name="name"
          labelText="Nome:"
        />
        <Input
          data-testid="form-email"
          type="email"
          name="email"
          labelText="E-mail:"
        />
        <Input
          data-testid="form-password"
          type="password"
          name="password"
          labelText="Senha:"
        />
        <Button type="submit" textButton="Enviar" />
      </form>
    </Container>
  );
};

export default SignIn;
