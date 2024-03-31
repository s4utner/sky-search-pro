import { UserCard } from '../../components'
import type { FC } from 'react'
import { IUser } from '../../types/types'
import * as styles from './UserListStyle'

export interface UserListProps {
  users: IUser[]
  isLoading?: boolean
  isSuccess?: boolean
  isError?: boolean
}

export const UsersList: FC<UserListProps> = ({ users, isLoading, isSuccess, isError }) => (
  <styles.UsersList users={users}>
    {isSuccess && users.length > 0 ? (
      users.map((user: IUser) => <UserCard key={user.id} user={user} />)
    ) : isSuccess && !isLoading && users.length < 1 && !isError ? (
      <styles.NoUsersMessage>Пользователи по запросу не найдены</styles.NoUsersMessage>
    ) : (
      !isLoading &&
      !isError && <styles.NoUsersMessage>Введите логин пользователя, которого хотите найти</styles.NoUsersMessage>
    )}
  </styles.UsersList>
)
