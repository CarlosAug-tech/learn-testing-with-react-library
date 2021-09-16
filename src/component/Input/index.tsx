import React, { InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  labelText: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({
  name,
  type,
  labelText,
  icon: Icon,
  ...rest
}) => (
  <Container data-testid="container-element" isIcon={!!Icon}>
    <input
      data-testid="input-element"
      name={name}
      type={type}
      placeholder=" "
      {...rest}
    />
    <label data-testid="label-element" htmlFor="">
      {labelText}
    </label>
    {Icon && <Icon size={20} />}
  </Container>
);

export default Input;
