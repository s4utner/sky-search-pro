import { styled } from 'styled-components'
import { LoaderProps } from './Loader'

export const LoaderContainer = styled.div<LoaderProps>`
  margin-top: ${({ variant }) => (variant === 'primary' ? '144px' : '0')};
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
`

export const LoaderText = styled.p<LoaderProps>`
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#000')};
  font-size: 32px;
`

export const Loader = styled.div`
  width: 15px;
  aspect-ratio: 1;
  position: relative;
  animation: l9-0 1.5s infinite steps(2);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #ee5a0b;
    color: #ee5a0b;
  }
  &::before {
    box-shadow: 26px 0;
    transform: translateX(-26px);
    animation: l9-1 0.75s infinite linear alternate;
  }
  &::after {
    transform: translateX(13px) rotate(0deg) translateX(13px);
    animation: l9-2 0.75s infinite linear alternate;
  }

  @keyframes l9-0 {
    0%,
    49.9% {
      transform: scale(1);
    }
    50%,
    100% {
      transform: scale(-1);
    }
  }
  @keyframes l9-1 {
    100% {
      box-shadow: 52px 0;
    }
  }
  @keyframes l9-2 {
    100% {
      transform: translateX(13px) rotate(-180deg) translateX(13px);
    }
  }
`
