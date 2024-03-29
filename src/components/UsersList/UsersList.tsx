import * as styles from './UserListStyle'
import type { FC } from 'react'
import { IUser } from '../../types/types'

interface UserListProps {
  users: IUser[]
  isSuccess: boolean
}

export const UsersList: FC<UserListProps> = ({ users, isSuccess }) => {
  return (
    <styles.UsersList>
      {isSuccess &&
        users.map((user: IUser) => {
          return (
            <styles.UserContainer key={user.id}>
              <styles.UserInfo>
                <styles.UserAvatar src={user.avatar_url}></styles.UserAvatar>
                <styles.UserLogin>{user.login}</styles.UserLogin>
              </styles.UserInfo>
              <styles.UserButton>Подробнее</styles.UserButton>
            </styles.UserContainer>
          )
        })}
    </styles.UsersList>
  )
}
