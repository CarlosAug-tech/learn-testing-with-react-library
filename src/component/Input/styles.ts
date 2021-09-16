import styled from 'styled-components';

interface IInputStylesProps {
  isIcon: boolean;
}

export const Container = styled.div<IInputStylesProps>`
  position: relative;

  &:first-child {
    margin-top: 20px;
  }

  & + div {
    margin-top: 20px;
  }

  > input {
    width: 100%;
    padding: ${(props) =>
      props.isIcon ? '16px 16px 16px 32px' : '16px 16px 16px 16px'};
    border: 1px solid #333;
    border-radius: 4px;

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      top: -12px;
      left: 5px;
      padding: 3px;
      color: teal;
      background: #fff;
    }

    &:focus ~ svg,
    &:not(:placeholder-shown) ~ svg {
      color: teal;
    }
  }

  > label {
    top: 16px;
    left: ${(props) => (props.isIcon ? '32px' : '17px')};
    position: absolute;
    transition: all 0.4s ease;
    pointer-events: none;
  }

  > svg {
    top: 10px;
    left: 10px;
    position: absolute;
  }
`;
