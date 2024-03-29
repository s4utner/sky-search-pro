import { UserCard } from '../../components'
import type { FC } from 'react'
import { IUser } from '../../types/types'
import * as styles from './UserListStyle'

interface UserListProps {
  users: IUser[]
  isSuccess: boolean
}

export const UsersList: FC<UserListProps> = ({ users, isSuccess }) => {
  return (
    <styles.UsersList>
      {isSuccess && users.map((user: IUser) => <UserCard key={user.id} user={user} />)}
    </styles.UsersList>
  )
}
