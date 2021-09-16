import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
}

const Button: React.FC<IButtonProps> = ({ textButton, ...rest }) => (
  <Container {...rest}>{textButton}</Container>
);

export default Button;
