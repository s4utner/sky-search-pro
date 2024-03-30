import { styled } from 'styled-components'

export const MainInfo = styled.div`
  z-index: 2;
  padding: 16px 62px 16px 62px;
  max-width: 640px;
  height: 182px;
  border-radius: 16px;
  background-color: #fff;
  position: absolute;
  align-self: center;
  justify-self: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 32px;
`

export const CloseIcon = styled.img`
  position: absolute;
  height: 24px;
  right: 10px;
  top: 10px;
  cursor: pointer;
`

export const Avatar = styled.img`
  height: 144px;
  border-radius: 90px;
`

export const Login = styled.a`
  font-size: 48px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    color: #d05d1f;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const InfoText = styled.p`
  font-size: 24px;
`
