import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { FiUser } from 'react-icons/fi';
import Input from '../../Input';

import 'jest-styled-components';

const InputProps = {
  name: '',
  type: 'text',
  labelText: '',
  icon: FiUser,
};

describe('', () => {
  it('', async () => {
    const { getByTestId } = render(
      <Input
        name={InputProps.name}
        type={InputProps.type}
        labelText={InputProps.labelText}
      />,
    );

    const inputElement = getByTestId('input-element');

    const labelElement = getByTestId('label-element');

    await act(async () => {
      await inputElement.focus();
    });

    fireEvent.click(labelElement);

    expect(inputElement).toHaveFocus();
  });
  it('', () => {
    render(
      <Input
        name={InputProps.name}
        type={InputProps.type}
        labelText={InputProps.labelText}
        icon={InputProps.icon}
      />,
    );
  });
});
