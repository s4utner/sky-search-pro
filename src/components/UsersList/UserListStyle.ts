import { styled } from 'styled-components'
import { UserListProps } from './UsersList'

export const UsersList = styled.div<UserListProps>`
  margin-top: 32px;
  display: ${({ users }) => (!users || users.length < 1 ? 'flex' : 'grid')};
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 72px;
`

export const NoUsersMessage = styled.div`
  margin-top: 144px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #fff;
`
