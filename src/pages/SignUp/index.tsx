import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import Button from '../../component/Button';
import Input from '../../component/Input';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const SignUp: React.FC = () => {
  const { signUp } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      signUp({ name, email, password });
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} data-testid="form-signUp">
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

export default SignUp;
