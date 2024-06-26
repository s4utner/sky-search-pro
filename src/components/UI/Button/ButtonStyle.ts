import { styled } from 'styled-components'
import { ButtonProps } from './Button'

export const Button = styled.button<ButtonProps>`
  font-size: ${({ variant }) => (variant === 'primary' ? '24px' : '16px')};
  border: none;
  border-radius: 32px;
  outline: none;
  padding: 10px 20px 10px 20px;
  background-color: white;
  color: #fff;
  background-color: #ee5a0b;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background-color: #d05d1f;
  }
`
