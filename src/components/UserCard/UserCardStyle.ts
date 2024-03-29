import { styled } from 'styled-components'

export const UserCard = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 45px;
  margin-left: 16px;
`

export const UserLogin = styled.p`
  font-size: 24px;
  margin-left: 16px;
`

export const UserButton = styled.button`
  border: none;
  border-radius: 32px;
  outline: none;
  padding: 8px 16px 8px 16px;
  background-color: white;
  font-size: 16px;
  color: #fff;
  background-color: #ee5a0b;
  cursor: pointer;
  transition: all 0.15s;
  margin-right: 16px;

  &:hover {
    background-color: #d05d1f;
  }
`