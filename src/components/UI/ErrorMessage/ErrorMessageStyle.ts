import { styled } from 'styled-components'
import { ErrorMessageProps } from './ErrorMessage'

export const ErrorMessageContainer = styled.div<ErrorMessageProps>`
  margin-top: ${({ variant }) => (variant === 'primary' ? '144px' : '0')};
  display: flex;
  flex-direction: column;
  gap: ${({ variant }) => (variant === 'primary' ? '16px' : '8px')};
  align-items: center;
`

export const ErrorMessage = styled.p<ErrorMessageProps>`
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#000')};
  font-size: ${({ variant }) => (variant === 'primary' ? '32px' : '24px')};
  text-align: center;
`

export const ErrorIcon = styled.img<ErrorMessageProps>`
  height: ${({ variant }) => (variant === 'primary' ? '88px' : '72px')};
`
