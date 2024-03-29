import { styled } from 'styled-components'

export const UserCard = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 45px;
`

export const UserLogin = styled.p`
  font-size: 24px;
  margin-left: 16px;
`